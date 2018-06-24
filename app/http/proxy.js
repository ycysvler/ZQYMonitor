import $ from 'jquery';
import Config from 'config';
import {UserActions, UserStore} from '../system/user/userapi.js';

class HttpProxy {
    get(url, param, callback) {
        let self = this;
        $.ajax(
            {
                url: url,
                type: "GET",
                dataType: "json",
                data: param,
                beforeSend: function (xhr) {
                    let token = self.getToken();
                    xhr.setRequestHeader("authorToken", token);
                },
                success: function (data, status) {
                    callback(status, data);
                },
                error: function (reason) {
                    console.log(reason);
                }
            }
        );
    }

    post(url, param, callback) {
        let self = this;
        $.ajax(
            {
                url: url,
                type: "POST",
                data: JSON.stringify(param),
                cache: false,
                contentType: "application/json;charset=utf-8",
                processData: false,
                dataType: "json",
                beforeSend: function (xhr) {
                    let token = self.getToken();
                    xhr.setRequestHeader("authorToken", token);
                },
                success: function (data, status) {
                    callback(status, data);
                },
                error: function (reason) {
                    console.log('error',reason);
                }
            }
        );
    }

    put(url, param, callback) {
        let self = this;
        $.ajax(
            {
                url: url,
                type: "PUT",
                data: JSON.stringify(param),
                cache: false,
                contentType: "application/json;charset=utf-8",
                processData: false,
                dataType: "json",
                beforeSend: function (xhr) {
                    let token = self.getToken();
                    xhr.setRequestHeader("authorToken", token);
                },
                success: function (data, status) {
                    callback(status, data);
                },
                error: function (reason) {
                    console.log(reason);
                }
            }
        );
    }

    delete(url, param, callback) {
        let self = this;
        $.ajax(
            {
                url: url,
                type: "DELETE",
                data: param,
                cache: false,
                contentType: "application/json;charset=utf-8",
                processData: false,
                dataType: "json",
                beforeSend: function (xhr) {
                    let token = self.getToken();
                    xhr.setRequestHeader("authorToken", token);
                },
                success: function (data, status) {
                    callback(status, data);
                },
                error: function (reason) {
                    console.log(reason);
                }
            }
        );
    }

    getToken(){
        let current = UserStore.current ? UserStore.current : JSON.parse( sessionStorage.getItem('user'));

        if(current){
            return current.authorToken;
        }else{
            UserActions.goLogin();
        }
    }
}

export default new HttpProxy();