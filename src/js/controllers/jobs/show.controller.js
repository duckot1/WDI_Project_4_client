angular
.module('jobsApp')
.controller('JobsShowCtrl', JobsShowCtrl);

JobsShowCtrl.$inject = ['Job', '$stateParams', '$state', 'Review', 'CurrentUserService'];

function JobsShowCtrl(Job, $stateParams, $state, Review, CurrentUserService) {
  const vm = this;
  console.log($stateParams);
  Job
  .get($stateParams)
  .$promise
  .then(data => {
    console.log(data);
    vm.job = data;
    if (CurrentUserService.currentUser.id === vm.job.owner.id){
      vm.deleteToggle          = true;
      vm.editToggle            = true;
      vm.interestedToggle      = false;
      vm.applicationsToggle   = true;
      const dateTimeNow = new Date();
      console.log(dateTimeNow);
      const unixTimeNow = Date.parse(dateTimeNow)/1000;
      console.log(unixTimeNow);
      const unixTimeSelected = Date.parse(vm.job.datetime)/1000;
      console.log(unixTimeSelected);
      if (unixTimeNow > unixTimeSelected) {
        vm.completedToggle      = true;
      } else {
        vm.completedToggle      = false;
      }
    } else {
      vm.deleteToggle          = false;
      vm.editToggle            = false;
      vm.interestedToggle      = true;
      vm.applicationsToggle   = false;
      vm.completedToggle      = false;
    }
  });

  vm.delete = function() {
    Job.delete($stateParams).$promise.then(() => {
      $state.go('jobsIndex');
    });
  };


  vm.interestedToggle      = true;
  vm.deleteToggle          = false;
  vm.editToggle            = false;
  vm.completedToggle      = false;
  vm.applicationsToggle   = false;

  console.log($stateParams.id);


  vm.applicationForm = applicationForm;

  function applicationForm(){
    vm.showApplicationModal = true;
  }

  vm.apply = function() {
    vm.application.job_id = $stateParams.id;
    console.log(vm.application);
    Job
    .apply(vm.application)
    .$promise
    .then((data) => {
      $state.go('jobsIndex');
    }, err => {
      console.log(err);
    });
  };

  vm.reviewTasker = reviewTasker;

  function reviewTasker(){
    vm.showReviewModal = true;
  }

  vm.review = {};

  vm.ratingTest = function() {
    const rating = $('#count').html();
    console.log(rating);
  };

  vm.complete = function() {
    var rating = $('#count').html();
    rating = parseInt(rating);

    vm.job.status = 'finished';
    console.log(vm.job);

    Job
    .update($stateParams, vm.job)
    .$promise
    .then(data => {
      $state.go('jobsIndex');
    }, err => {
      console.log(err);
    });

    vm.review.rating = rating;
    vm.review.job_id = vm.job.id;
    vm.review.user_id = vm.job.tasker.id;
    console.log(vm.review);
    Review
    .save(vm.review)
    .$promise
    .then(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  };


  var __slice = [].slice;

  (function($, window) {
    var Starrr;

    Starrr = (function() {
      Starrr.prototype.defaults = {
        rating: void 0,
        numStars: 5,
        change: function(e, value) {}
      };

      function Starrr($el, options) {
        var i, _, _ref,
        _this = this;

        this.options = $.extend({}, this.defaults, options);
        this.$el = $el;
        _ref = this.defaults;
        for (i in _ref) {
          _ = _ref[i];
          if (this.$el.data(i) != null) {
            this.options[i] = this.$el.data(i);
          }
        }
        this.createStars();
        this.syncRating();
        this.$el.on('mouseover.starrr', 'span', function(e) {
          return _this.syncRating(_this.$el.find('span').index(e.currentTarget) + 1);
        });
        this.$el.on('mouseout.starrr', function() {
          return _this.syncRating();
        });
        this.$el.on('click.starrr', 'span', function(e) {
          return _this.setRating(_this.$el.find('span').index(e.currentTarget) + 1);
        });
        this.$el.on('starrr:change', this.options.change);
      }

      Starrr.prototype.createStars = function() {
        var _i, _ref, _results;

        _results = [];
        for (_i = 1, _ref = this.options.numStars; 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--) {
          _results.push(this.$el.append("<span class='glyphicon .glyphicon-star-empty'></span>"));
        }
        return _results;
      };

      Starrr.prototype.setRating = function(rating) {
        if (this.options.rating === rating) {
          rating = void 0;
        }
        this.options.rating = rating;
        this.syncRating();
        return this.$el.trigger('starrr:change', rating);
      };

      Starrr.prototype.syncRating = function(rating) {
        var i, _i, _j, _ref;

        rating || (rating = this.options.rating);
        if (rating) {
          for (i = _i = 0, _ref = rating - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
            this.$el.find('span').eq(i).removeClass('glyphicon-star-empty').addClass('glyphicon-star');
          }
        }
        if (rating && rating < 5) {
          for (i = _j = rating; rating <= 4 ? _j <= 4 : _j >= 4; i = rating <= 4 ? ++_j : --_j) {
            this.$el.find('span').eq(i).removeClass('glyphicon-star').addClass('glyphicon-star-empty');
          }
        }
        if (!rating) {
          return this.$el.find('span').removeClass('glyphicon-star').addClass('glyphicon-star-empty');
        }
      };

      return Starrr;

    })();
    return $.fn.extend({
      starrr: function() {
        var args, option;

        option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        return this.each(function() {
          var data;

          data = $(this).data('star-rating');
          if (!data) {
            $(this).data('star-rating', (data = new Starrr($(this), option)));
          }
          if (typeof option === 'string') {
            return data[option].apply(data, args);
          }
        });
      }
    });
  })(window.jQuery, window);

  $(function() {
    return $(".starrr").starrr();
  });

  $( document ).ready(function() {

    $('#stars').on('starrr:change', function(e, value){
      $('#count').html(value);
    });

    $('#stars-existing').on('starrr:change', function(e, value){
      $('#count-existing').html(value);
    });
  });





}
