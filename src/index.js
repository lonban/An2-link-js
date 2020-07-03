class Link
{
  this__ = '';

  constructor()
  {}

  this_(this_)
  {
    this.this__ = this_;
    return this;
  }

  /*返回时跳转*/
  back(link,data)
  {
    let this_ = this.this__;
  }

  /*点击时跳转*/
  to(link,data)
  {
    let this_ = this.this__;
    if(link){
      let data_ = {};
      if(data){
        data_['query'] = data;
      }
      if(link.indexOf('/') != -1){//链接地址
        data_['path'] = link;
      }else{
        data_['name'] = link;
      }
      this_.$router.push(data_);
    }else{
      location.reload(true);
    }
  }

  /*获取链接里传递的参数*/
  get(key)
  {
    let get = decodeURIComponent(window.location.search).replace(/\?\?/i,'?');
    let data = [];
    let data1 = {};
    let this_ = this.this__;
    if(get){
      get = get.replace(/\?/i,'');
      get = get.split('&');
      for(let i = 0; i < get.length; i++) {
        data = get[i].split('=');
        if(data[0]) {
          data1[data[0]] = data[1];
        }
      }
    }
    Object.assign(data1,this_.$route.query);
    if(key){
      return data1[key];
    }else{
      return data1;
    }
  }
}

export default Link;
