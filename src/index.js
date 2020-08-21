class Link {
    this__ = '';

    constructor() {
    }

    this_(this_) {
        this.this__ = this_;
        return this;
    }

    /*返回时跳转*/
    back(link, data) {
        let this_ = this.this__;
    }

    /*
    点击时跳转
    link里没有 / 则是以name跳转并使用的是params传参
    */
    to(link, data) {
        let number = link ? parseInt(link) : 0;
        if (number || number == 0) {
            window.history.go(number);
            //this_.$router.go(number);
        } else {
            let data_ = {};
            if (link.indexOf('//') != -1) {
                window.location.href = link;
                return;
            } else if (link.indexOf('/') != -1) {//链接地址
                data_['path'] = link;
                if (data) {
                    data_['query'] = data;
                }
            } else {
                data_['name'] = link;
                if (data) {
                    data_['params'] = data;
                }
            }
            this.this__.$router.push(data_);
        }
    }

    set() {
    }

    /*
    获取链接里传递的参数
    接收params参数时key应该为:key，params的key在路由层定义的
    */
    get(key) {
        let get = decodeURIComponent(window.location.search).replace(/\?\?/i, '?');
        let data = [];
        let data1 = {};
        let this_ = this.this__;
        if (get) {
            get = get.replace(/\?/i, '');
            get = get.split('&');
            for (let i = 0; i < get.length; i++) {
                data = get[i].split('=');
                if (data[0]) {
                    data1[data[0]] = data[1];
                }
            }
        }
        if (this_) {
            Object.assign(data1, this_.$route.query);
            if (key) {
                let result = /^:/;
                if (result.test(key)) {
                    return this_.$route.params[key.replace(result, '')];
                } else {
                    return data1[key];
                }
            } else {
                return data1;
            }
        } else {
            if (key) {
                return data1[key];
            } else {
                return data1;
            }
        }
    }
}

export default Link;
