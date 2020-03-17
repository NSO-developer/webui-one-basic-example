//  Example request to NSO JSONRPC

// jsonrpc request counter, each request should have an unique id.
let id = 0;

// Return jsonrpc json representation of method and param
const newRequest = (method, params) => {
    id += 1;
    return JSON.stringify({
        jsonrpc: '2.0',
        id,
        method,
        params
    });
};

// JSON-RPC helper
// Return request promise 
const jsonrpc = (method, params) => {
    const url = `/jsonrpc/${method}`;
    const body = newRequest(method, params);

    return fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            Accept: 'application/json;charset=utf-8',
            'Content-Type': 'application/json;charset=utf-8',
        },
        body,
    }).then((response) => {
        if (response.status !== 200) {
            return Promise.reject(new Error(method, response, body));
        }
        return response.json();
    }).then((json) => {
        if (json.error) {
            return Promise.reject(new Error(json.error, body));
        }
        return json.result;
    });
};

// logout and direct browser to login page
const logout = () => {
    jsonrpc('logout', {}).then(() => {
        window.location.reload();
    });
};

// fetch the system version with the get_system_setting method.
// Return request promise
const fetchSystemVersion = () => jsonrpc('get_system_setting', {
    operation: 'version'
});

// fetch the current user with the get_system_setting method.
// Return request promise
const getCurrentUser = () => {
    jsonrpc('get_system_setting', {
        operation: 'user'
    }).then((username) => {
        document.getElementById('username').textContent = username;
    });
};

// show/hide logout menu
const toggleLogoutVisibility = () => {
    const element = document.getElementById('logout-div');
    const style = window.getComputedStyle(element);
    const disp = style.getPropertyValue('display');
    element.style.display = disp === 'block' ? 'none' : 'block';
};

window.addEventListener('load', () => {
    document.querySelector('#showLogout').addEventListener('click', toggleLogoutVisibility);
    document.querySelector('.overlay').addEventListener('click', toggleLogoutVisibility);
    document.querySelector('#dropdown-content-item-log').addEventListener('click', logout);

    // update the systemVersion element when the window has loaded.
    fetchSystemVersion().then((version) => {
        const element = document.getElementById('systemVersion');
        element.innerText = version;
    });
    getCurrentUser();
});
