export let FlickrGallery = (baseURL) => {
  return {
    restrict: 'E',
    scope: {
      data: '=data'
    },
    templateUrl: baseURL + 'templates/flickrGallery.html'
    /*template: `
      <div class="row">
        <div class="col-sm-6 col-md-3" ng-repeat="image in data">
          <h4>{{image.title | titleHeaderStyler }}</h4>
          <a class="thumbnail">
            <img style="width: 260px; height: 180px;" ng-src="{{image.media.m}}">
          </a>
        </div>
      </div>`*/
  };
};
