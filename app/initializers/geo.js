export function initialize(app) {
  // application.inject('route', 'foo', 'service:foo');
  if (typeof FastBoot !== 'undefined') { return; }
  let geo = navigator.geolocation;

/*
  app.deferReadiness();
  if (geo) {
    geo.getCurrentPosition(pos => {
      let pt = pos.coords;

      // console.log(pt.longitude, pt.latitude);
      app.register('data:location', pt, { instantiate: false });

      app.advanceReadiness();
    });
  } else {
    app.advanceReadiness();
  }
  */
  
}

export default {
  name: 'geo',
  initialize
};
