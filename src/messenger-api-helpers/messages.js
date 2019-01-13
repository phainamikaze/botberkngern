const openExistingListButton = (listUrl, buttonText = 'Edit List') => {
    return {
      type: 'web_url',
      title: buttonText,
      url: listUrl,
      messenger_extensions: true,
      webview_height_ratio: 'tall',
    };
  };
  
  const createListButton = (apiUri, buttonTitle = 'สร้างรายการใหม่') => {
    return {
      type: 'web_url',
      url: `${apiUri}/createlist`,
      title: buttonTitle,
      webview_height_ratio: 'compact',
      messenger_extensions: true,
    };
  };
  
  const welcomeMessage = (apiUri) => {
    return {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'button',
          text: 'มาเริ่มสร้างรายการทวงตังกันได้แล้ว',
          buttons: [
            createListButton(apiUri),
          ],
        },
      },
    };
  };
  
  const noListsMessage = (apiUri) => {
    return {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'button',
          text: 'ดูเหมือนว่ายังไม่มีรายการเลย. สร้างสักอันไหม?',
          buttons: [
            createListButton(apiUri),
          ],
        },
      },
    };
  };
  
  const listUrl = (apiUri,owner,createtime) => `${apiUri}/itemslist/${owner}_${createtime}`;
  
  const listElement = ({owner,createtime, title , newval }, apiUri) => {
    let sub = "ยังระบุยอดไม่ได้";
    if(newval){
      sub = `ยอดรวม ${newval} บาท`
    }
    return {
      title: title,
      subtitle: sub,
      default_action: {
        type: 'web_url',
        url: listUrl(apiUri, owner,createtime),
        messenger_extensions: true,
        webview_height_ratio: 'tall',
      },
    };
  };
  
  const paginatedListsMessage = (apiUri, action, lists, offset = 0) => {
    const pageLists = lists.slice(offset, offset + 4);
  
    let buttons;
    if (lists.length > (offset + 4)) {
      buttons = [
        {
          title: 'ดูเพิ่มเติม',
          type: 'postback',
          payload: `${action}_OFFSET_${offset + 4}`,
        },
      ];
    }
    if(pageLists.length===1){
      return shareListMessage(apiUri, 
        pageLists[0].owner,
        pageLists[0].createtime,
        pageLists[0].title, 
        'เปิดดู');
    }else{
      return {
        attachment: {
          type: 'template',
          payload: {
            template_type: 'list',
            top_element_style: 'compact',
            elements: pageLists.map((list) => listElement(list, apiUri)),
            buttons,
          },
        },
      };
    }
  
  };
  
  const listCreatedMessage = {
    text: 'สร้างรายการเรียบร้อย',
  };
  
  const shareListMessage = (apiUri, owner, createtime, title, buttonText) => {
    const urlToList = listUrl(apiUri, owner, createtime);
    return {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          elements: [{
            title: title,
            subtitle: 'เปิดดู เพื่อเริ่มแก้ไข',
            default_action: {
              type: 'web_url',
              url: urlToList,
              messenger_extensions: true,
            },
            buttons: [openExistingListButton(urlToList, buttonText)],
          }],
        },
      },
    };
  };
  
  module.exports = {
    welcomeMessage,
    listCreatedMessage,
    paginatedListsMessage,
    createListButton,
    noListsMessage,
    shareListMessage,
  };
  