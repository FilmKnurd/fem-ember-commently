export function initialize(app) {
  let fb = app.lookup('service:fastboot');
  let sb = fb.get('shoebox');
  let store = sb.retrieve('request-data');

  // appInstance.inject('route', 'foo', 'service:foo');
  if (typeof FastBoot !== 'undefined') {
    let headers = fb.get('request.headers');
    let ua = headers.get('user-agent');
    
    app.register('data:request', { userAgent: ua }, { instantiate: false });

    if (!store) {
      store = {};
      sb.put('request-data', store);
    }

    store['ua'] = ua;
  } else if (store) {
    let ua = store.ua;
    app.register('data:request', { userAgent: ua }, { instantiate: false });
  }
}

export default {
  name: 'agent',
  initialize
};
