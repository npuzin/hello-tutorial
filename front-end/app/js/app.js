'use strict';

angular.module('hello', [])

	.config(['$logProvider', function($logProvider) {

		$logProvider.debugEnabled(true);
	}])

	.run(['$log', function($log) {

		$log.debug('starting app');       
		
	}]);