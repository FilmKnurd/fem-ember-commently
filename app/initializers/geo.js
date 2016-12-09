<<<<<<< HEAD
export function initialize(app) {
  // application.inject('route', 'foo', 'service:foo');
  if (typeof FastBoot !== 'undefined') { return; }
  let geo = navigator.geolocation;

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
  
}

export default {
  name: 'geo',
  initialize
};
=======
export function initialize( /*app*/ ) {
    // if (typeof FastBoot === 'undefined' && navigator.geolocation) {
    //     const geo = navigator.geolocation;
    //     app.deferReadiness();
    //     geo.getCurrentPosition((pos) => {
    //         let pt = pos.coords;
    //         let loc = {
    //             lat: pt.latitude,
    //             lng: pt.longitude
    //         };
    //         app.register('data:location', loc, {
    //             instantiate: false
    //         });
    //         app.advanceReadiness();
    //     });
    // }
}

export default {
    name: 'geo',
    initialize
};
>>>>>>> 496237cfc832756f431446e36b3569df2e06cb7a
