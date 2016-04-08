
/* JavaScript content from js/main.js in folder common */
/* JavaScript content from js/main.js in folder common */
		function alertNotification(message) {
					IBMBluemix.getLogger()
							.info("Received notification");
					//alert("Received notification");
					//alert(JSON.stringify(message)+"--->"+message.alert);
					// currentPageId = '11';
					//if(message.alert.length >0){
					 var scope = angular.element(
							    document.
							    getElementById("bodydiv")).
							    scope();
							    scope.$apply(function () {
							        scope.notifscreenfromalert(7);
							    });
					//}
					
				};
				

(function(){
	
	var app = angular.module('AngularStarterApp', ["uiSlider","ngRoute","pageslide-directive","UserValidation"]);
	
	app.controller("ApplicationController",function($scope, $route, $sce, $http,$cacheFactory){
		 $scope.checked1 = false;// This will be binded using the ps-open
									// attribute
		 $scope.checked2 = true;
		 $scope.togglebody = function(){
			// alert("in togglebody");
            if( $scope.checked1 == true)
             {
            	 $scope.checked1 = !$scope.checked1;
             }
         };
         $scope.toggle = function(){
             $scope.checked1 = !$scope.checked1;
         };
		var l = WL.Logger.create({pkg:"ApplicationController"});
		var _this = this;
		var currentPageId = 1;
		var pdfURL=null;
		var downloadablePdfName='';
		$scope.appBusyInd = new WL.BusyIndicator('content', {text : "Please wait..."});
		$scope.username = '';
		$scope.npassword = '';
		$scope.country = '';
		$scope.flagval='';
		$scope.tkno = '';
		$scope.status = '';
		$scope.test="Severity";
		$scope.firstSelect="Select Ticket";
		$scope.newnotifticket=[];
		$scope.yearm='';
		$scope.bool='';
		$scope.ticketid='';
		$scope.kmdata=[];
		$scope.csldata=[];
		$scope.servdet='';
		$scope.kmdatacat=[];
		$scope.csldatacat='';
		$scope.newpagedata = [];
		$scope.functid=[];
		$scope.areainfo='';
		$scope.flag='';
		this.feeds = [];
		this.solutions = [];
		this.options = [];
		this.currentFeed = {};
		this.auth = '';
		$scope.ymval='';
		$scope.netstatus='';
		$scope.followStatus='';
		$scope.newfunctionality='';
		$scope.topfunctionality='';
		$scope.total=0;
		$scope.startTime='';
		$scope.seconds='';
		$scope.deg='';
		$scope.catall='';
		$scope.output='';
		$scope.input='';
		$scope.ticketarray=[];
		$scope.uniquetickets = [];
		$scope.ticketfinal=[];
		$scope.ticketfinal1='';
		$scope.ticket='';
		$scope.initial="false";
		$scope.useremail='';
		$scope.usercomp='';
		 $scope.newusers=[];
 	    $scope.newccusers=[];
 	    $scope.flag = '';
 	    $scope.showModal = false;
 	    $scope.showDialog = false;
		

	/* Start  For showing Alerts */						
			
		$scope.showSimpleDialog = function(message) {

							title = "Alert!!!";
							jAlert(message, title);

						};
	/* End  For showing Alerts*/
					
						
						/* Start for login function*/
						$scope.forgotpassword  = function(pageId)
						{	if($scope.username == '')
							{
							$scope.showSimpleDialog('Please enter the username!!');
							}
						else{
							$scope.appBusyInd.show();
						
							$http.get(  
								'http://evopeopleapp.mybluemix.net/api/service/forgotPassword/'+$scope.username,{headers:{'Cache-Control':'no-cache'}}).
								success(function(data1) {
											$scope.appBusyInd.hide();
											if(data1.forgotPassword.result == 'success'){
												$scope.showSimpleDialog('Password has been sent to your Email ID. Please Check!!');
											}
											
											
											  
										}).error(function(data1) {
											$scope.appBusyInd.hide();
									console.log('Error ' + data1);
								});
						}
							currentPageId = pageId;
							$scope.$apply();
						};
						
						$scope.alertNotification = function(message) {

							IBMBluemix.getLogger()
									.info("Received notification");
							alert("Received notification");
							//alert(JSON.stringify(message)+"--->"+message.alert);
							// currentPageId = '11';
							/*if(message.alert.length >0){*/
							$scope.notifscreenfromalert(7);
							 /*var scope = angular.element(
									    document.
									    getElementById("bodydiv")).
									    scope();
									    scope.$apply(function () {
									        scope.notifscreenfromalert(7);
									    });*/
							//}
							
						};
						
												this.authun = function(pageId) {

							WL.Device
									.getNetworkInfo(function(info) {
										$scope.netstatus = '';
										console
												.log("Checking if device is connected to the network");
										// info.isNetworkConnected = 'true';
										if (info.isNetworkConnected == 'false') {

											$('#username').val("");
											$('#npassword').val("");
											$scope
													.showSimpleDialog('No network connection.  Please connect to the network and try again.');

										} else {
											console
													.log("Device is connected to the network");
											$scope.appBusyInd
											.show();
									
											var user = $scope.username;
											var data = '{"userName":"'+$scope.username+'","password":"'+$scope.npassword+'"}';
											
								
												$http
											.post(
													"http://evopeopleapp.mybluemix.net/api/service/login",
													data,
													{
														headers : {
															'Content-Type' : 'application/json'
														}
													})
													.success(
															function(res) {
																
																console
																		.log('Success '
																				+ res + res.Login.notesid);
																//alert(res.Login.result);
																if (res.Login.result == 'login_success') {
																			
																	$scope.useremail = res.Login.email;
																	$scope.usercomp = res.Login.userfullname;
																	
																var setup = {
																		applicationId : 'f9f4b7cd-76bb-433f-9d2b-00b22bf51fc9',
																		applicationRoute : 'http://VodaEurope.mybluemix.net',
																		applicationSecret : '1f7d98fa961cf8429d57a35bd0653c8a83c5d9a0'
																	};
																	
																	IBMBluemix
																			.initialize(
																					setup)
																			.then(
																					function() {
																						return IBMPush
																								.initializeService();
																					})
																			.done(
																					function(
																							push) {
																						//alert("call push register" +push);
																						push
																								.registerDevice(
																										$scope.username,
																										$scope.username,
																										"alertNotification")
																								.done(
																										function(
																												response) {
																											//alert(response);
																										},
																										function(
																												err) {
																										});

																					},
																					function(
																							err) {
																						IBMBluemix
																								.getLogger()
																								.error(
																										"Error initializing the Push SDK");
																					});
																	$scope.appBusyInd
																			.hide();
																	currentPageId = pageId;
																	$scope.$apply();
																}

																else {

																	$(
																			'#username')
																			.val(
																					"");
																	$(
																			'#npassword')
																			.val(
																					"");
																	$scope.appBusyInd
																			.hide();
																	$scope.showSimpleDialog('Invalid Username and Password. Try Again !!');
																}
															})
													.error(
															function(res) {
																$scope.appBusyInd
																		.hide();
																$scope
																		.showSimpleDialog('Error '
																				+ res);
															});
										}
									});
						};	
			/* End of Login Function*/
		
	/* Start for Sign-Out Function*/
		
		$scope.logout = function(pageId){
			$scope.toggle();
			$('#username').val("");
			$('#npassword').val("");
			$scope.username='';
			$scope.npassword='';
			currentPageId = pageId;			
		};
	
	/* End for Sign-Out Function*/	
		

						
					/* Start of EVO Process*/
						    $scope.clickOnListItem=function() {
						    	/*window.open('https://docs.google.com/gview?embedded=true&url=http://adm2dristg.vdfibmtools.com/EVO/EVOProcess.pdf', '_system');*/
						    	downloadablePdfName = 'EVOProcessDocument.pdf';
						    	//pdfURL='https://7baa1838-0ca7-4518-aebf-ac2b9aefd64b-bluemix:6cabf82acfb17833e019f22c764323f259f79b6cf7ec3111db9f06b3e2d2e52c@7baa1838-0ca7-4518-aebf-ac2b9aefd64b-bluemix.cloudant.com/sample_nosql_db/1443675957887/EVOProcessDocument.pdf';
						    	//pdfURL = 'https://7baa1838-0ca7-4518-aebf-ac2b9aefd64b-bluemix.cloudant.com/sample_nosql_db/_design/ProcessDoc/' + downloadablePdfName;
						    	pdfURL='http://adm2dristg.vdfibmtools.com/EVO/EVOProcess.pdf';
						    	//window.open(pdfURL, '_blank', 'location=no');
							$scope.openPDFFile(pdfURL);

};
$scope.openPDFFile =function(pdfURL) {
	var pdftesturl = pdfURL;
	$scope.downloadFile(pdftesturl);
};   
						    $scope.downloadFile=function(pdftesturl){
						    	
						    	$scope.appBusyInd
								.show();
						    	//alert("Ivneet Testing---"+pdfURL);
						    	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, 
						    	    function onFileSystemSuccess(fileSystem) {
						    	      	var fileTransfer = new FileTransfer();
						    	            
						    	      	var uri = encodeURI(pdftesturl);

						    	      	//alert(pdftesturl+'---'+ fileSystem.root.toURL() + '/' + downloadablePdfName);
						    	        fileTransfer.download(pdftesturl,                           		
						                	    fileSystem.root.toURL()  + '/' + downloadablePdfName, // the key factor !!!
						                	    function(theFile) {
						    	        	$scope.appBusyInd
											.hide();
						                	            	 
						    	        	//$scope.showSimpleDialog("download complete: " + theFile.toURL());
						                	   
						                	    console.log("download complete: " + theFile.toURL());
						                	    $scope.showLink(theFile.toURL());
						                    },
						                    function(error) {
						                    	$scope.appBusyInd
												.hide();
						                    	$scope.showSimpleDialog(JSON.stringify(error));
						                        console.log("download error source " + error.source);
						                        console.log("download error target " + error.target);
						                        console.log("upload error code: " + error.code);
						                    }
						                );
						    	       
						    	    }, fail);
						    	};
						    	
						    	$scope.showLink = function(url){
						    		
						    		//alert(url);
						    	    window.open(url,'_system');
						    	    
						    	 
						    	    };
						    	    function fail(evt) {
						    	        console.log(evt.target.error.code);
						    	    }
						    	 
						
					/* End of Download Functionality*/	
					
					/*Start of RSVP functionality */
						    	       	   
						    	 $scope.getouser = function(){
						    		$scope.abc=0;
						    		 $scope.showModal = !$scope.showModal;
						    		$scope.newusers=[];
						    		$scope.appBusyInd.show();
										$http.get(  
												'http://evopeopleapp.mybluemix.net/api/service/getusers').success(
												function(data1) {
													$scope.appBusyInd.hide();
													for(var i=0;i<data1.UserList.users.length;i++)
													{  if(data1.UserList.users[i].username == $scope.username){}
													else
														$scope.newusers.push(data1.UserList.users[i]);
													}
													console.log('Success for follow status ' + JSON.stringify($scope.newusers));
													}).error(function(data1) {
													$scope.appBusyInd.hide();
											console.log('Error ' + data1);
										});
										
						    	 }  ;
						    	 
						    	 $scope.gettouser = function(){
						    		// $scope.showDialog = !$scope.showDialog;
						    		// alert($scope.selectedusers);
						    		 if($scope.selectedusers != "" && $scope.selectedusers != null)
						    			 $scope.abc=1;
						    		 else
						    			 $scope.abc=0;
						    	 					    	
					    	 };
					    	 $scope.getccuser = function(){
					    	 if($scope.selectedccusers != "" && $scope.selectedccusers != null)
				    			 $scope.bcc=1;
				    		 else
				    			 $scope.bcc=0;
					    	 };	 
						    	 
						    	
						    		$scope.sendmail = function(pageId){
						    			$scope.tousers=[];
										var subject = $('#subject').val();
										var text = $('#mailbody').val();
										var tousers = $('#to').val();
										//alert(tousers);
										
										//alert($scope.username+"------>"+subject +"------>"+text+"------->"+$scope.selectedusers+"------->"+$scope.selectedccusers);
										if(subject =="" || subject == null || text == "" ||text == null || tousers == ""||tousers == null )
										{
											$scope.showSimpleDialog('Please fill all the fields.');
										}
										
										else{
											$scope.appBusyInd.show();
											//alert(JSON.stringify($scope.selectedusers));
											var data = '{"sender":"'+$scope.usercomp+'","to":"'+$scope.selectedusers+'","cc":"'+$scope.selectedccusers+'","subject":"'+subject+'","text":"'+text+'"}';
											//alert(data);
											
												
											
										$http
										.post(
												"http://evopeopleapp.mybluemix.net/api/service/notify",
												data,
												{
													headers : {
														'Content-Type' : 'application/json'
													}
												})
										.then(
												function(response) {
													console.log(JSON
																	.stringify(response));
													$scope.appBusyInd
															.hide();
													
													if(response.data.checkStatus.DBUpdateStatus == "Notification sent. DB updated successfully")
														{
														$scope.showSimpleDialog('Notification Successfully sent!!');
														
														}
													else
														{
														$scope.showSimpleDialog('Notification not sent!!!!');
														}
													currentPageId=pageId;
													$scope.$apply();
												
												});
						    		}
														
									};
									$scope.resetvalues = function(){
										
										$("#to").val('');
										$("#cc").val('');
										$scope.selectedusers = '';
										$scope.selectedccusers='';
										$("#subject").val('');
										$("#mailbody").val('');
									};

						    	 
						/* End of RSVP functionality*/
					/*Start of Feedback Functionality*/
												$scope.sendfeedback = function() {
							WL.Device
									.getNetworkInfo(function(info) {
										$scope.netstatus = '';
										console
												.log("Checking if device is connected to the network");
										if (info.isNetworkConnected == 'false') {
											$scope
													.showSimpleDialog("No network connection.  Please connect to the network and try again.");

										} else {
											console
													.log("Device is connected to the network");
											$scope.appBusyInd.show();
											var ar = document
													.getElementById("area");
											$scope.areainfo = ar.options[ar.selectedIndex].text;
											var comments = document
													.getElementById("commentval").value;
											var descrip = document
													.getElementById("describeval").value;

											var data = '{"username":"'
													+ $scope.username
													+ '","area":"'
													+ $scope.areainfo
													+ '","comments":  "'
													+ comments
													+ '","description":"'
													+ descrip + '"}';
											// alert(data);
											if (comments == null
													|| descrip == null
													|| comments == ''
													|| descrip == '') {
												$scope.appBusyInd.hide();
												$scope
														.showSimpleDialog('Comment and Description cannot be null');
											} else {
												$http
														.post(
																"http://evopeopleapp.mybluemix.net/api/service/feedback",
																data,
																{
																	headers : {
																		'Content-Type' : 'application/json'
																	}
																})
														.then(
																function(
																		response) {
																	var res = JSON
																			.stringify(response);
																	console
																			.log(JSON
																					.stringify(response));
																	$scope.appBusyInd
																			.hide();
																	if (res) {
																		document
																				.getElementById("commentval").value = '';
																		document
																				.getElementById("describeval").value = '';
																		$scope
																				.showSimpleDialog('Feedback Submitted successfully!!');
																	} else {
																		document
																				.getElementById("commentval").value = '';
																		document
																				.getElementById("describeval").value = '';
																		$scope
																				.showSimpleDialog('Feedback Failed to Submit');
																	}
																	// return response;
																});
											}
										}
										$scope.appBusyInd.hide();
									});

						};
				/*End of Feedback Functionality*/
						
				/* Start of Voting Functionality
				   1. NewFunct
				   2. sendvoting
				   3. voting */			
						$scope.newfunct = function(pageId){
							WL.Device.getNetworkInfo(function(info){
								// info.isNetworkConnected = 'true';
								console.log("Checking if device is connected to the network");
								if(info.isNetworkConnected == 'true'){
									$scope.appBusyInd.show();
									$http.get(  
											'http://evopeopleapp.mybluemix.net/api/service/feedbackAll',{headers:{'Cache-Control':'no-cache'}}
													).success(
											function(data1) {
												$scope.appBusyInd.hide();
												$scope.newfunctionality = data1;
												currentPageId = pageId;
												$scope.$apply();
												$scope.functid=[];
												for(var i=0;i<data1.NewFeedbackList.list.length;i++)
												{$('#'+data1.NewFeedbackList.list[i].id).hide();}
												console.log('Success for follow status ' + JSON.stringify(data1) + "--->"+$scope.newfunctionality);

											}).error(function(data1) {
												$scope.appBusyInd.hide();
										console.log('Error ' + data1);
									});
								} else {
									$scope.showSimpleDialog('No network connection.  Please connect to the network and try again.');
								}
							});
						};
						
					
							$scope.voting = function(idval, index) {

							if ($.inArray(idval, $scope.functid) != '-1') {
								// alert(idval+"---before--->"+
								// $scope.functid);
								$('#' + idval).hide();
								$('li').eq(index).css("background", "white");
								var removeItem = idval;

								$scope.functid = jQuery.grep($scope.functid,
										function(value) {
											return value != removeItem;
										});

								console
										.log("checking json array after deleting"
												+ $scope.functid);
							} else {
								// alert(idval);
								$('#' + idval).show();
								$('li').eq(index).css("background", "#e0e0e0");
								$scope.functid.push(idval);
								console.log("checking json array"
										+ $scope.functid);
							}
						};
						$scope.sendVoting = function(pageId) {
							WL.Device
									.getNetworkInfo(function(info) {
										// info.isNetworkConnected = 'true';
										console
												.log("Checking if device is connected to the network");
										info.isNetworkConnected = 'true';
										if (info.isNetworkConnected == 'true') {
											$scope.appBusyInd.show();
											var votevals = '{"username":"'
													+ $scope.username
													+ '","feedbackVote":"'
													+ $scope.functid + '"}';
											// alert(votevals);
											$http
													.post(
															"http://evopeopleapp.mybluemix.net/api/service/voting",
															votevals,
															{
																headers : {
																	'Content-Type' : 'application/json'
																}
															})
													.success(
															function(response) {
																$scope.appBusyInd
																		.hide();
																$scope
																		.showSimpleDialog("Votes Submitted");
																console
																		.log('Success current team'
																				+ response);

															})
													.error(
															function(response) {
																$scope.appBusyInd
																		.hide();
																console
																		.log('Error '
																				+ data);
															});
										} else {
											$scope
													.showSimpleDialog('No network connection.  Please connect to the network and try again.');
										}
										// alert($scope.functid.length);
										for (var i = 0; i < $scope.functid.length; i++) {
											$('#' + $scope.functid[i]).hide();
											$('#a' + $scope.functid[i]).css(
													"background", "white");

										}

										$scope.functid = [];
									});
						};
						
					/* End of Voting Functionality */
						
					/* Start of Top Functionality
					   1. Topfunc
					   2. getdegree */
						
							$scope.topfunc = function(pageId){
								WL.Device.getNetworkInfo(function(info){
									// info.isNetworkConnected = 'true';
									console.log("Checking if device is connected to the network");
									if(info.isNetworkConnected == 'true'){
										// console.log("No network connection.
										// Please connect to the network and try
										// again.");
										$scope.appBusyInd.show();
										$http.get(  
												'http://evopeopleapp.mybluemix.net/api/service/feedback/top5',{headers:{'Cache-Control':'no-cache'}}).success(
												function(data1) {
													$scope.appBusyInd.hide();
													$scope.topfunctionality = data1;
													// alert(data1.Top5Feedback.list.length);
													for(var i=0;i<data1.Top5Feedback.list.length;i++)
														{$scope.total += data1.Top5Feedback.list[i].count;}
																for (var i = 0; i < data1.Top5Feedback.list.length; i++) {
																	$scope.seconds = data1.Top5Feedback.list[i].count;

																	$scope.startTime = $scope.total;

																	$scope.deg = 360 * ($scope.seconds / $scope.startTime);

																	
																		

																}
													// alert($scope.total);
													currentPageId = pageId;
													$scope.$apply();
													console.log('Success for follow status ' + JSON.stringify(data1) + "--->"+$scope.topfunctionality);
													
													  
												}).error(function(data1) {
													$scope.appBusyInd.hide();
											console.log('Error ' + data1);
										});
									} else {
										$scope.showSimpleDialog('No network connection.  Please connect to the network and try again.');
									}
									 
								});
							};
							
							$scope.getdegree = function(func)
							{
								$scope.seconds = func.count;

								$scope.startTime = $scope.total;

								$scope.deg = 360 * ($scope.seconds / $scope.startTime);

								return $scope.deg;
							};
							
						/* End of Top Functionality*/

					
						/* Start of Notification*/
												$scope.ticketFilter = function(sol) {
							if ($scope.firstSelect == "Select Ticket"
									|| $scope.firstSelect == null)
								return sol.ticketid;

							else
								return sol.ticketid === $scope.firstSelect.ticketid;

						};
							
										

												$scope.notifscreenfromalert = function(pageId) {
						
							//$scope.uniquetickets = [];
							console.log("Device is connected to the network");
							
							$http
									.get('http://evopeopleapp.mybluemix.net/api/service/notifications/'
													+ $scope.username)
									.success(
											function(data1) {
												/*cache.put('notifticket',data1);*/
												// $scope.appBusyInd.hide();
												$scope.newnotifticket =data1.NotificationList.notifications;
												//alert($scope.newnotifticket);
												currentPageId = pageId;
												$scope.$apply();

											}).error(function(data1) {
										// $scope.appBusyInd.hide();
										console.log('Error ' + data1);
									});
										
						};

						

						$scope.notifscreen = function(pageId) {
							/*$("#ticketno").val(
									$("#ticketno option:first").val());
							$scope.firstSelect = "Select Ticket";*/
							//var cache = $cacheFactory.get('$http');
							$scope.toggle();
							
							WL.Device
									.getNetworkInfo(function(info) {
										console
												.log("Checking if device is connected to the network");
										if (info.isNetworkConnected == 'false') {
											console
													.log("No network connection.  Please connect to the network and try again.");

											$('#username').val("");
											$('#npassword').val("");
											$scope
													.showSimpleDialog('No network connection.  Please connect to the network and try again.');

										} else {
											//$scope.uniquetickets = [];
											console
													.log("Device is connected to the network");
											$scope.appBusyInd.show();
											$http
													.get(
															'http://evopeopleapp.mybluemix.net/api/service/notifications/'
																	+ $scope.username,{headers:{'Cache-Control':'no-cache'}})
													.success(
															function(data1) {
															 /*cache.put('notitick',data1);*/
																$scope.appBusyInd
																		.hide();
																//alert($scope.newnotifticket);
																$scope.newnotifticket = data1.NotificationList.notifications;
																if($scope.newnotifticket.length == 0)
																	{
																	$scope
																	.showSimpleDialog('No Notification Received !!');
																	currentPageId= 2;
																	}
																else{
																	currentPageId = pageId;
																	$scope.$apply();
																}
					
																console
																		.log('Success for follow status '
																				+ JSON
																						.stringify(data1)
																				+ "--->"
																				+ $scope.newnotifticket);

															})
													.error(
															function(data1) {
																$scope.appBusyInd
																		.hide();
																console
																		.log('Error '
																				+ data1);
															});
										}
										
									});
						};
						
						$scope.notdetails = function(detailnotif,pageId)
						{
							$scope.soldet = detailnotif;
							currentPageId=pageId;
						};
				/*End of Notification*/	
				
						/* Start of Change Password*/
						$scope.submitform = function(pageId) {
							var pass = document.getElementById("password").value;
							WL.Device
									.getNetworkInfo(function(info) {
										console
												.log("Checking if device is connected to the network");
										if (info.isNetworkConnected == 'false') {
											console
													.log("No network connection.  Please connect to the network and try again.");

											$('#username').val("");
											$('#npassword').val("");
											$scope
													.showSimpleDialog('No network connection.  Please connect to the network and try again.');

										} else {
											console
													.log("Device is connected to the network");
											$scope.appBusyInd.show();
											var data = '{"userName":"'
													+ $scope.username
													+ '","password":"' + pass
													+ '"}';
											$http
													.post(
															"http://evopeopleapp.mybluemix.net/api/service/changePassword",
															data,
															{
																headers : {
																	'Content-Type' : 'application/json'
																}
															})
													.success(
															function(response) {
																$scope.appBusyInd
																		.hide();
																$scope
																		.showSimpleDialog("Password changed successfully!! Please login again.");
																$('#password')
																		.val("");
																$('#password_c')
																		.val("");
																$('#npassword')
																		.val("");
																$('#username')
																		.val("");
																currentPageId = pageId;
																$scope.$apply();
																console
																		.log('Success current team'
																				+ response);
															})
													.error(
															function(response) {
																$scope.appBusyInd
																		.hide();
																console
																		.log('Error '
																				+ data);
															});

										}
									});
						};
			/*End of Change Password*/
					
						this.changePage = function(pageId) {
							//alert(pageId);
							if (pageId == 1) {
								// navigator.app.exitApp();
								$("#username").val('');
								$("#npassword").val('');
								$scope.username='';
								$scope.npassword='';
								
							}
					
					if(pageId == 8)
					{
						$("#to").val('');
						$("#cc").val('');
						$scope.selectedusers='';
						$scope.selectedccusers='';
						$("#subject").val('');
						$("#mailbody").val('');
						$scope.getouser();
						
					}
					if (pageId == 9) {
						$scope.toggle();
						
					}
									
					if (pageId == 6) {
						$scope.toggle();
						
					}
					currentPageId = pageId;
					
				};
				this.showDetails = function(pageId, tkt) {
					currentPageId = pageId;
					$scope.picked = tkt;
				};

				this.shouldDisplay = function(pageId) {
					return pageId === currentPageId;
				};
				
				this.msgDisplay = function(keyVal) {
					currentPageId = 1;
				};

				this.renderHtml = function() {
					return $sce
							.trustAsHtml(_this.currentFeed.description);
				};

				this.onFeedItemClicked = function(feedId) {
					this.currentFeed = this.feeds[feedId];
					currentPageId = 2;
				};

					});
	
	
	app.directive('loginPage', function(){
		return {
			restrict: 'E', 
			templateUrl: 'login-page.html'
		};
	});
	app.directive('dashboard',function(){
		return {
			restrict: 'E', 
			templateUrl: 'dashboard.html'
		};
	});
	
	
	app.directive('feedback', function(){
		return {
			restrict: 'E', 
			templateUrl: 'feedback.html'
		};
	});
	app.directive('votingpage', function(){
		return {
			restrict: 'E', 
			templateUrl: 'votingpage.html'
		};
	});
	app.directive('topfuncpage', function(){
		return {
			restrict: 'E', 
			templateUrl: 'topfuncpage.html'
		};
	});
	app.directive('changepassword', function(){
		return {
			restrict: 'E', 
			templateUrl: 'changepassword.html'
		};
	});
	app.directive('notification', function(){
		return {
			restrict: 'E', 
			templateUrl: 'notification.html'
		};
	});
	app.directive('rsvp', function(){
		return {
			restrict: 'E', 
			templateUrl: 'rsvp.html'
		};
	});
	app.directive('about', function(){
		return {
			restrict: 'E', 
			templateUrl: 'about.html'
		};
	});
	
	app.directive('notifdetail', function(){
		return {
			restrict: 'E', 
			templateUrl: 'notifdetail.html'
		};
	});
	app.directive('igLogin', function () {
	    return {
	      template: '<div style="margin-left:10px;border-color:transparent;outline:none"><select id="myselection" multiple data-ng-multiple="true" data-ng-model="selectedusers"  data-ng-options="c.userfullname as c.userfullname for c in newusers" style="background-color:white;border-color:white;outline:none;color:white;"></select></div>',
	      restrict: 'E',
	      replace:true,
	      controller: function ($scope) {
	            
	            $scope.submito = function() {
	               
			        $("#userModal").modal('hide');
	            };
	            
	            $scope.cancel = function() {
	                $scope.showModal = false;
			        $("#userModal").modal('hide');
	            };
	            
	            $scope.$watch('showModal', function() {
	                if ($scope.showModal) {
			            $("#userModal").modal('show');
	                };
	           });   
	        }
	    };
	  });
	app.directive('ccLogin', function () {
	    return {
	      template: '<div><div class="modal fade" id="ccModal" tabindex="-1" + role = "dialog" aria-labelledby = "myModalLabel" aria-hidden = "true" > ' +
	      '<div class = "modal-dialog" >'+
	      '<form name = "form" ng-submit = "submit()" > ' +
	      '        <div class = "modal-content" > ' +  
	      '          <div class="modal-body">' +
	      '            <table border="0"><tr><td>'+
	      '              <h5 style="color:black;">Select Users </h5></td></tr><br>' +
	      '<tr><td><select size="10" id="myselection" multiple data-ng-multiple="true" data-ng-model="selectedccusers"  data-ng-options="c.email as c.userfullname for c in newusers"></select> </td></tr> ' +
	      '            <tr><td colspan="2"><input type="submit" class="btn btn-primary" id="submit" ng-click="submit()" value="Add Users"></input ></td></tr></table> ' +
	      '          </div>' +
	      '        </div > ' +
	      '      </form></div></div></div>',
	      restrict: 'E',
	      replace:true,
	      controller: function ($scope) {
	            
	            $scope.submit = function() {
	                //$scope.login();
			        $("#ccModal").modal('hide');
	            };
	            
	            $scope.cancel = function() {
	                $scope.showDialog = false;
			        $("#ccModal").modal('hide');
	            };
	            
	            $scope.$watch('showDialog', function() {
	                if ($scope.showDialog) {
			            $("#ccModal").modal('show');
	                };
	           });   
	        }
	    };
	  });
}());
/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful
// initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}
/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the IBM MobileFirst Platform runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}