  var request= require('request');

  form = 'add_item%5Bquantity%5D=1&add_item%5Bproduct_id%5D=158398&add_item%5Bproduct_item_id%5D=783563&add_item%5Bdaily_deal_item_id%5D=944763';
  var sequence = Math.floor( ((Math.random() * 100000) + new Date().getUTCMilliseconds()) % 100000 );
  request({
    uri: 'http://www.nomorerack.com/shopping_carts/add_item',
    method: 'POST',
    proxy_cookies: true,
    headers: {
      Host: 'www.nomorerack.com',
      'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_3) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.65 Safari/537.31',
      'X-Requested-With':'XMLHttpRequest'
    },
    form: {
      'ajax': 'true',
      'sequence': sequence,
      'form': form
    }
  }, function (error, response, body) {
      console.log(form);
    if (error) {
      return next(error);
    }

    try{     
      console.log(form);
      console.log(body);
      var parseBody = JSON.parse(body);
    }catch(err) {
        //return next(new BBError(BBError.CART.ERROR));
    }

    // Verify the remote request succeeded
    // if (parseBody.error == true) {
    //     return next(new BBError({
    //     error: 'CART.ERROR',
    //     statusCode: 400,
    //     message: parseBody.messages.error[0].message
    //   }));
   })
