'use strict';

/**
 * @ngdoc service
 * @name launchPointAppApp.backend
 * @description
 * # backend
 * Service in the launchPointAppApp.
 */
angular.module('launchPointAppApp')
  .factory('backend', ['$http','$q',function ($http,$q) {

    var invokeApi = function(httpCall,url,data,config){
      var deferred = $q.defer();
      httpCall(url,data,config)
        .then(function(response){
          deferred.resolve(response.data);
        },function(response){
          deferred.reject(response);
        });
      return deferred.promise;
    };
    function makeStr(possible){
      var text = "";
      for( var i=0; i < 5; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
    function getStr(size){ return makeStr("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",size); }
    function getNum(size){ return makeStr("0123456789",size); }
    function getLet(size){ return makeStr("ABCDEFGHIJKLMNOPQRSTUVWXYZa",size); }
    function getName(){
      var names = ["Alayna Kovacek","Chadd Schowalter","Darwin Graham","Deondre Ratke","Mr. Ashley Roberts","Emanuel Volkman II","Erin Russel","Bell Hamill","Buck Spinka","Kody Luettgen","Raheem Kilback","Freddy Bode","Kamron Wiza","Crystal Champlin","Ardith Keebler","Augustus Feil","Hortense Little PhD","Dr. Bernadette Marks","Candice Kovacek","Mr. Haleigh Bradtke","Duncan Streich","Tracey Schinner","Dr. Zora Haag","Braeden Nolan","Aubree Becker","Brook Labadie","Sherman Wisoky","Abel Pfeffer","Quentin Trantow","Mrs. Floy Witting","Bernadine Bayer","Mrs. Isobel Kris","Lillian Kutch","Jamey Conroy","Mona Pfeffer","Bridie Schneider","Adolph Keebler","Vincent Halvorson","Garth Purdy","Andre Walsh","Enid Osinski","Michel Denesik","Samanta Thiel","Dave Hauck","Casey Conn","Lowell Erdman II","Cecile Marvin","Brandon Flatley","Miss Shaniya Kerluke","Vita Brown","Oleta Morar","Felton Berge","Rose Gaylord","Ruby Treutel","Kamren Hahn","Kayley Blanda","Adeline Gutkowski","Shea Schuster","Oliver Reynolds","Kevon Hudson","Jaunita Pfeffer","Cale Krajcik","Jovanny Monahan","Mrs. Hunter Cartwright","Beverly Kohler","Ms. Flo Hackett","Mr. Mandy Schroeder","Nick Goldner","Leonard Predovic","Joey Baumbach","Miss Maximilian Willms","Era Wuckert","Miss Hollie Walter","Nettie Ondricka","Hettie Rogahn","Al McClure","Paige Stokes DDS","Ms. Conrad Quigley","Mr. Larissa Kilback","Tressa Leannon","Trinity O'Hara","Nathaniel Fadel","Jimmy Labadie","Max Leannon","Eunice McCullough III","Lisa Wunsch","Maximilian Crist","Kurtis Hamill","Estell Bergstrom DVM","Nikolas Vandervort","Sonia Kirlin","Mrs. Roselyn Johns","Nikko Haley","Miss Claire Torphy","Genoveva Weissnat","Billy Hansen DVM","Blaise McClure","Warren Balistreri","Macy Stark","Dwight Bartoletti","Dr. Cody Leffler","Webster Schuster","Jacques Heller","Nathanial Murazik","Mya Ward","Trenton Corwin","Gerard Zulauf","Joshua Dickinson","Miss Lexie Monahan","Ms. Emilia Osinski","Zelda Fisher PhD","Yazmin Hettinger","Tom McGlynn","Ashtyn Murray","Miss Era Jones","Brielle Jast","Lennie Barrows","Meagan Collins","Miss Alia Shanahan","Dr. Izabella Jacobi","Zander Carter","Nicole Larson","Ms. Cruz Abbott","Miss Merlin Schultz","Susie Will","Arne Farrell","Helga Hoppe","Adonis Franecki","Estel Jerde","Lazaro Hagenes","Florence Bailey","Ms. Hattie Pouros","Golden Trantow","Dwight Kling","Eriberto Erdman","Aditya Mosciski","Reymundo Deckow","Braxton Koch","Ian Deckow","Leonor Quitzon","Lura Cremin","Bennett Frami","Brandi Barrows","Koby Larson","Arnoldo Bosco","Lenora Runolfsdottir V","Barney Brakus","Berry Kozey","Miss Ariel Veum","King Wunsch","Maritza Ritchie","Ethel Cassin","Angelica Hegmann","Mr. Joyce Huel","Donato Leffler","Skyla Nikolaus","Abby Bashirian DDS","Levi Little","Hugh Ortiz","Mr. Terence Prohaska","Marina Pouros PhD","Erwin Connelly","Della Halvorson","Ms. Nathanial Bauch","Luther Macejkovic","Al Howell","Theresia Davis","Gideon Mitchell","Kip Luettgen","Mr. Jarret Williamson","Gerry Satterfield","Janis Waters","Mr. John Purdy","Santa Witting","Alvera Olson","Diamond Larson","Dewayne Osinski II","Golda Becker","Dulce Wuckert","Kylee Emmerich","Laverne West","Creola Cummings","Izaiah Bradtke","Filiberto Maggio","Ruben Bartoletti PhD","Christelle Nolan","Dr. Randal Feil","Norma Goldner Sr.","Willa Nienow","Madelyn Flatley","Dr. Dejon Waelchi","Selina Mohr","Santino Kessler","Blaze Pacocha","Hoyt Parisian","Ignatius Spencer","Clemmie Bartell I","Loren Jerde Jr.","Adrienne Kuvalis","Gustave Funk","Maria Effertz","Antonietta Sawayn IV","Sheila Stanton","Titus Shanahan","Emil Parker","Henri Medhurst","Allen Kertzmann","Annalise Konopelski","Rae Cormier","Madge Prosacco I","Thea Fay","Shanie Lowe","Mr. Mauricio Halvorson","Phyllis Graham","Laurie Robel","Allison Schuster","Madyson Runolfsson","Otha Ruecker","Delbert Gibson IV","Velva Okuneva","Brielle Fisher I","Wendy Boyle MD","Lula Larkin","Micheal Feil II","Kailey Marquardt","Annalise Haag","Cruz Erdman","Idell Conroy","Carroll Prohaska","Joey Willms","Hassie Prohaska","Sylvan O'Keefe","Antoinette Gleichner","Kayli Blanda","Llewellyn Yost","Melyssa Stark","Ephraim Pouros","Monroe Runte","Olga Prohaska","Frederick Wilderman","Veronica Boehm","Garfield Leffler","Shawn Kuvalis","Troy Parisian","Sabryna Kreiger","Lyda Bode","Myrna Gibson","Jenifer Carroll III","Norberto Dibbert","Vena Hermann III","Alvena McKenzie","Mrs. Chauncey Hills","Zackary Koelpin","Mrs. Beaulah Bartell","Aidan Pagac V","Darrel Schoen","Candida Rogahn PhD","Rosalia Rippin","Mrs. Alfreda Osinski","Yvonne Bechtelar","Mr. Tillman Schmidt","Golden Kulas","Vincent Nader","Nya Brakus","Elijah Herzog","Johnny Hermiston V","Dewitt Kuhic","Marcelino Towne","Furman Harber","Luigi Bergnaum","Scarlett Kshlerin","Filomena Will","Amely Ankunding","Frederik Upton","Doug Ledner","Arnaldo Connelly","Alberta Harris","Anjali Emard V","Rachael McGlynn","Stevie Goldner","Carleton Maggio Sr.","Moriah Kuhlman","Breana Hansen","Howell Jacobson","Fritz Ryan","Ms. Helga Wisoky","Mrs. Perry Kris","Ollie Hegmann","Jerad Kunze","Jade Schuster","Terrill Mann","Jaydon Kassulke","Aaron Schuppe","Cristina Steuber Sr.","Beryl Waters","Irma Carter","Lamar Wilderman","Elisha Hoeger","Aubree Walsh","Catalina Hauck","Scottie McDermott","Verda Erdman","Clemens Emmerich","Daisy McGlynn","Dayana Konopelski","Nico Romaguera","Miss Florencio Lebsack","Makenna Kuphal","Matt Kreiger","Arlene Macejkovic PhD","Quinn Friesen","Corine McKenzie","Reyes Cummerata II","Alexis Jenkins","Valentina Lowe Jr.","Tremaine Powlowski","Demarco Langosh Jr.","Jana Emard","Missouri Lang Sr.","Osbaldo Von","Reyes Corkery","Maybell Runte","Shawn Bednar","Dahlia Tremblay","Candido Bartell","Tiara Rice","Erna Roberts Jr.","Kelli Feil","Electa Lindgren","Jaquelin Schmidt","Garfield Schoen I","Austyn Crona III","Mrs. Destini Ondricka","Jakayla Hagenes","Amari Labadie","Cole O'Conner","Gilda Hintz","Silas Morissette","Simone Reichert","Hope Renner","Marguerite Hermann DVM","Aron Bartoletti","Viva Stiedemann","Destinee Reichert","Art Romaguera MD","Bella Orn","Ray Stamm","Bernice Harvey","Nedra Mosciski","Dayna Weissnat","Ms. Rebeka Von","Delphia Daugherty","Nona Quigley","Mrs. Deshaun Auer","Dr. Suzanne Pfannerstill","Manuel Larson","Corine Fay","Rashawn Breitenberg III","Deanna Runolfsson","Jeffery O'Kon","Casper Schimmel DDS","Frida Gleason V","Mrs. Bailey Murazik","Alda Lockman","Madisen Brown III","Justine Hermann","Allie Bergnaum","Ansel Mosciski","Angelita Torphy","Kavon Russel III","Gardner Grady","Nicholaus Predovic","Marianne Cole","Cortez Harber","Braxton Gottlieb","Humberto Doyle","Frederick Conroy","Kailey Vandervort","Vincenza Upton","Catharine Pfeffer","Presley Dickens","Eileen Mitchell","Llewellyn Renner","Nia Sanford","Bernadette Gusikowski","Dejah Bogan","Jovan Skiles","Cristobal MacGyver","Helmer Swaniawski","Pasquale Haley","Katarina Reilly","Justus Schamberger","Myriam Pacocha","Miss Kelly Hayes","Arianna Schroeder","Arvel Metz","Logan Will","Jovanny Breitenberg","Sonia Nader","Katherine Feeney","Darren Wisozk","Skyla Feil","Margaretta Erdman","Loyal Prosacco","Dr. Julian Ward","Ethyl Luettgen","Lolita Miller I","Orion Ferry","Raheem Schumm","Willy Kessler","Chase Spencer","Zachariah Kub","Curt Yost","Bailey Greenfelder","Sheila Pollich PhD","Tiana Green","Mr. Amaya Jones","Johnathon Rutherford","Flossie Gottlieb","Carmel Stokes","Rolando Champlin","Adella Barton","Juliana Hodkiewicz II","Jamil Swift","Eladio Murazik","Vesta O'Reilly","Vance Moore","Sadie Stracke","Miss Rosanna Ankunding","Beth Kassulke","Hassan Smith","Mrs. Shany West","Judy Rice","Beth Pagac","Rodrick Spinka","Rowena Mitchell","Sarina Reichel","Hillard Bernhard","Georgianna Howell","Ms. Allen Sipes","Gladyce Boehm","River Schmeler DVM","Elton Schaefer","Dr. Modesta Donnelly","Beryl Koelpin","Berta Block DDS","Flossie Toy","Melyna Purdy","Miss Korbin Parisian","Audrey Stehr","Kianna Douglas","Eva Wunsch","Dulce Skiles","Asha Larson","Kaden Moore","Lauretta McCullough","Gaston Quigley","Earline Purdy","Osvaldo Murray","Danielle Grimes","Neva Von","Heath Nader","Charity Willms","Alfredo Purdy","Steve Stroman","Baron Altenwerth","Maureen Kunze III","Miss Ofelia Becker","Jodie Marks","Solon MacGyver MD","Mireya Lesch","Miss Godfrey Veum","Norberto Veum","Domenick Orn","Nelda Morar","Pamela Eichmann","Bert Cartwright II","Hailie Purdy","Kristian Cronin II","Vada Kutch","Dr. Samir Weimann","Janiya Williamson","Roscoe Friesen","Yasmin Larson","Brenda Bergnaum","Mr. Eusebio Koelpin","Otto Roberts","Celine Kreiger","Lacy Schmeler","Stone Mosciski","Kim Fadel","Ethelyn Grady","Malachi Eichmann","Angelina Bahringer","Alanis Conn","Dasia Keeling","Janis Botsford","Edythe Cronin","Retha Sawayn","Brianne Cormier"]
      return names[Math.floor(Math.random() * names.length)];
    }
    function getCompany(){
      var companies= ["Stoltenberg - Gusikowski","Littel, Rogahn and Orn","Hansen Group","Beatty Group","Langworth - Schmeler","Wolf - Schroeder","Cummerata - Moore","Smitham and Sons","Borer Group","McGlynn, Weissnat and Olson","Schamberger, Marquardt and Mayer","Abernathy Group","Raynor, Gutmann and Cummings","Reilly and Sons","Mosciski, Wiegand and Ledner","Dickens - Yundt","Kautzer - Predovic","Conn Inc","Dietrich - Fay","Spencer - Reichert","Gutkowski and Sons","Schimmel, Hammes and Lesch","Powlowski, Williamson and Lehner","Bergnaum, Monahan and Kunde","Parker Group","Keebler, Erdman and Osinski","Roob Inc","Nicolas, Ullrich and Fahey","Hintz Inc","Ankunding, Kirlin and Wintheiser","McCullough Group","Gislason, Davis and Ledner","Nolan - Will","Weissnat Inc","Rath LLC","Mayer, Graham and Pfeffer","Wiza, Grimes and Hilpert","Cremin, Lockman and Gorczany","Funk - Goyette","Shanahan - Smith","Donnelly, Haag and Ritchie","Reynolds, Cormier and Aufderhar","Farrell - Hegmann","McKenzie Group","Streich, Lemke and Hoppe","Stehr - Feest","Carroll, Schmeler and Torphy","Prohaska LLC","VonRueden Inc","Gutkowski Group","White, Gibson and Greenfelder","Feest - Schaefer","Lowe, Bailey and Kiehn","Dickens and Sons","Hilll - Luettgen","Jones - Robel","Marks, McKenzie and Sauer","Batz, Zemlak and Lowe","Carroll, Erdman and Anderson","Borer - Walsh","Beatty - Ruecker","Beahan, Ryan and Jast","O'Hara - Grady","Howe Inc","Hilll Inc","Heidenreich, Wilkinson and Schuster","Langworth, Corwin and Hermann","Pfeffer - Herzog","Shanahan Group","McGlynn - Waters","Quitzon, Weimann and Rippin","Schaefer LLC","Hills Inc","Volkman, Hansen and Kertzmann","VonRueden - Klocko","Roberts - Goodwin","Veum Group","Batz - Kshlerin","Shields, Fritsch and Trantow","Kirlin, Reinger and Kovacek","Dickinson, Lueilwitz and Fay","Hintz, Johnston and Moore","Grady - Bode","Rosenbaum - Batz","Powlowski Group","Robel - Little","Considine - Kilback","Schowalter - Crona","Mayer - Batz","Denesik - Rippin","Flatley, Wisoky and Toy","Cremin Group","Frami Inc","Zemlak, Luettgen and Marquardt","Harris Inc","Stokes and Sons","Bartell - Fisher","Bode, Rolfson and Hintz","Fahey - Rohan","Lesch, Kunde and Hudson","Cummerata - Rogahn","Feil Inc","Walsh, Oberbrunner and Walker","Ankunding, Bradtke and Bartell","Boyle Group","Mitchell, Johnston and Dietrich","Corkery, Stamm and Schultz","Schiller - Johnson","Mraz - Bergnaum","Cronin - Thiel","Walker - Goldner","Smith Group","West - Douglas","McCullough - Mosciski","Bergnaum - Erdman","Vandervort - Kiehn","Deckow - Wuckert","Gleichner LLC","Walter, Hettinger and Thiel","Hane and Sons","Little, Kunze and Terry","Mann Inc","Hammes, Williamson and Miller","O'Hara Group","Berge, Blanda and Little","Gislason Group","Bosco - Reichert","Tremblay - Koepp","Miller, Hamill and Weber","Kris, Swift and Wehner","Howell, Denesik and Sporer","Fadel, Boehm and Wolff","Braun - Carroll","Murphy - Beahan","Kunde and Sons","Rodriguez, Eichmann and Nader","Bartell - O'Connell","Paucek - Reichert","Waters, Bartoletti and Eichmann","Jacobi - Baumbach","Bashirian, Yost and Hermann","Wiegand - Ondricka","Haag and Sons","Nikolaus - O'Hara","Smith Inc","Schroeder, Yost and Roob","Walsh LLC","Carter LLC","Lemke - Bogan","Oberbrunner, Zboncak and Wisozk","Frami LLC","Zemlak and Sons","Volkman, Gerhold and Goldner","Rau and Sons","Schaden, Kautzer and Blanda","Gaylord - Hartmann","Green - Waters","Turcotte, Bailey and Barrows","Doyle Inc","Dickens, Spinka and Larkin","Bernhard - Mann","Connelly - Medhurst","Block - Boyer","Kuphal - Wiza","Dickens LLC","Funk, Muller and Mann","Williamson - Lind","Thompson and Sons","Lubowitz, Koelpin and Bernier","Haag - Roberts","Stoltenberg - Mohr","Hayes - Kautzer","Bashirian, Cronin and Batz","Bradtke - Welch","Runte and Sons","Murazik, O'Keefe and Mayer","Kub Group","McKenzie, Watsica and Smith","Gleason - Marquardt","Cole, Bahringer and Predovic","Daugherty - Kutch","Lesch LLC","Rath and Sons","Walter, Gleichner and Hirthe","Skiles - Schulist","Hudson - Maggio","Batz LLC","Lowe and Sons","Sawayn Inc","Christiansen and Sons","Pfeffer - Abernathy","Prohaska Inc","Veum Group","Auer LLC","Padberg, Gerlach and Quigley","Swaniawski - Schultz","Schimmel Group","Corwin - Farrell","Miller - Borer","Langworth, VonRueden and Kreiger","Rohan Group","Williamson, Cummerata and Green","Spinka - Brakus","Frami, Waelchi and Stiedemann","Bauch, Little and Turcotte","Legros - McCullough","Botsford Inc","Bernier, Skiles and O'Reilly","Davis, Corkery and Jacobi","Schroeder, Cummerata and Bernhard","Lueilwitz - Mayert","Pollich - Dicki","Padberg, Huels and Quigley","Osinski, Heller and Schamberger","Thompson - Mohr","Farrell LLC","Feeney, Russel and Wehner","Leuschke, Daugherty and Gleason","Brekke - Hudson","Bahringer, Carter and Johns","Kris, Lind and D'Amore","Satterfield - Padberg","Will Inc","Batz, Hirthe and Rutherford","Jaskolski - Schamberger","Kuphal, Nader and Stark","Ziemann - Wunsch","Kertzmann and Sons","Durgan, Thiel and Walter","Gislason - Grimes","Casper and Sons","Willms, Carter and Pagac","Cummerata, Gottlieb and Shields","Stanton LLC","Macejkovic - Strosin","Hettinger - Douglas","Hettinger - Okuneva","Welch Inc","Howe and Sons","Welch LLC","Fisher, Zemlak and Hauck","Lynch, Dare and MacGyver","Farrell, Bogisich and Carroll","Gutkowski Inc","Donnelly - Schiller","Ankunding and Sons","Heller - Schinner","Murphy, Ruecker and Mayert","Mann LLC","Rempel, Hahn and Denesik","Quigley, Runte and West","Toy Group","Haley, Hilll and Krajcik","Schmitt, Hermiston and Swaniawski","Hoppe and Sons","Leannon, Dicki and Stark","Rosenbaum, Marks and Hirthe","King LLC","Weimann - Bashirian","Orn Inc","Wolf - Torphy","Mayer, Murray and Gulgowski","Konopelski - Bernier","Nitzsche LLC","Swaniawski, Huels and Willms","Kuphal - Ankunding","Pollich - Kassulke","Wolf, O'Reilly and Wisoky","Rohan - Schaefer","Cruickshank - Bednar","Pagac, Kemmer and Leannon","Heller LLC","Russel, Krajcik and Ernser","Volkman, Bayer and Pacocha","Emard, Paucek and Bruen","Skiles - Dare","Pacocha - VonRueden","Altenwerth - Heathcote","Gulgowski, O'Conner and Feeney","Bashirian - Streich","Hansen LLC","Fahey, Schmidt and MacGyver","Blanda - Rohan","Goodwin, Wilkinson and Koelpin","Thiel, Robel and Russel","Olson - Beier","Medhurst Inc","Murphy - Gerlach","Cronin - Schmeler","Paucek - Fritsch","Hermann and Sons","Keeling Group","Gibson, Greenholt and Bernier","Langworth, Moen and Hahn","Kessler - Douglas","Marks - Lueilwitz","Abernathy, Buckridge and Dicki","Johnson Group","McClure - Luettgen","West Group","Bashirian and Sons","Bednar, Nitzsche and Boehm","Schamberger, Buckridge and Satterfield","Luettgen Inc","Price, Barton and Mertz","Crooks LLC","Denesik and Sons","Kuphal Group","Mills and Sons","Streich, Rohan and Kub","Flatley Group","Green Inc","Wolf, Beier and Dietrich","Beier - Weber","Abernathy Group","Shields - Daugherty","Schroeder, Gislason and Schuppe","Conroy, Hessel and O'Hara","Hansen - Waelchi","Ratke Inc","Morissette - Hand","Dietrich - Bailey","Senger Inc","Stroman Inc","McDermott LLC","Zboncak - Kunze","Leffler and Sons","Osinski, Powlowski and Batz","Murazik, Legros and Spinka","Labadie - Hand","Will, Lueilwitz and Runolfsson","Wuckert Group","Gottlieb - Padberg","Torphy, Ankunding and Walter","Goldner Group","Hudson - Schmidt","Weimann - Batz","Abernathy, Block and Morar","Flatley - Labadie","Collins - Huel","Gleichner - Dicki","Roberts - Mante","Tillman - Rice","Turner, Beahan and Stokes","Okuneva - Douglas","Littel and Sons","Jerde, Sipes and Kub","Windler, Baumbach and Jacobi","Welch - Bruen","Hamill Inc","Gerlach - Schumm","Windler LLC","Schaefer, Grimes and Jones","Hagenes Group","Homenick, Morar and Hermann","Rohan, Corwin and Pfeffer","Stokes LLC","Stark - Huel","Nitzsche - Lueilwitz","Oberbrunner LLC","Ritchie - Glover","Berge - Reinger","Herman LLC","Zulauf - Mueller","Moore, Swaniawski and Hand","Swaniawski, Rempel and Cremin","Hilpert - Fay","Bahringer Group","West, Corwin and Medhurst","Douglas - Maggio","Mann, Wilkinson and Rolfson","Shanahan - Haag","Haag Inc","Bashirian, Russel and Littel","Jast LLC","Terry - Borer","Braun, O'Keefe and Steuber","Paucek - Gottlieb","Rohan - Labadie","Homenick, Crooks and Mertz","Funk Group","Kovacek - Kautzer","Volkman, Casper and Green","Haag - Schowalter","Ankunding LLC","Becker Group","Mueller - Walsh","Anderson, Pacocha and Howell","Mertz, Flatley and Thompson","Von, Bechtelar and Franecki","Lindgren, Towne and Bartell","Casper, Franecki and Hayes","Bartell, Johnson and Sporer","Halvorson, Heller and Moore","Klein and Sons","Rice - Kessler","Williamson Inc","Senger and Sons","Heathcote, Turcotte and Leannon","Simonis - Cassin","Terry, Mann and Cronin","Schowalter - Wiza","Kunde, Reichert and Koepp","Quitzon - Torp","O'Kon LLC","Hettinger, Ullrich and Auer","Beer - Wolff","Carter and Sons","Wolff, Welch and Cronin","Hyatt - Botsford","McKenzie - Mertz","O'Kon, Luettgen and Schiller","Dicki - Stracke","Lang LLC","Goodwin - Anderson","Raynor - Thiel","Windler, Klocko and Kihn","Kling, Hane and Russel","Flatley - VonRueden","Kemmer Group","Cummings, Hessel and Bosco","Huel - Nicolas","Brekke Inc","Roob - Kilback","Cronin Inc","Pfannerstill LLC","Senger LLC","Waters LLC","Gulgowski - Streich","Huels, Hudson and Schmidt","Prohaska - Satterfield","Muller, Turcotte and Moen","Schuster - Cremin","O'Keefe - Kuphal","Howell LLC","Macejkovic, Breitenberg and Casper","Rippin - Ondricka","Denesik - Ernser","Casper - Farrell","Feil - Kub","Conn Inc","Ebert Group","Glover Group","Cartwright Inc","Osinski, Mann and Monahan","Yost Group","Wunsch Inc","Halvorson, Bernier and Kozey","Purdy LLC","Botsford, Reilly and Kautzer","Olson, Emmerich and Lakin","Swift - Lebsack","Zulauf, Cormier and Borer","Rowe and Sons","Klocko LLC","Green - Lynch","Keebler LLC","Graham Inc","Jast Inc","Lind Group","Watsica, Kub and Wisozk","Kunze, Langworth and Larson","Sauer - Bauch","Boehm Inc","Rau - Hilll","Cormier - Towne","Deckow and Sons","Nikolaus Group","Nicolas, Bernhard and Champlin","Gaylord LLC","Adams, Grady and Swaniawski","Bruen - Romaguera","Hagenes LLC","Bogan and Sons","Schultz, Weimann and Goldner","Gaylord Inc","Douglas LLC","Crona - Buckridge","Rau, Graham and Carroll","Cremin LLC","McDermott Inc","McDermott, Stiedemann and Krajcik","Greenfelder - Paucek","Sawayn - Hagenes","Deckow LLC","Kub, Lynch and Davis","Smitham - Beahan","Halvorson - Kihn","Pouros, Bartoletti and DuBuque","VonRueden Group","Herman and Sons","Leuschke LLC","Cremin LLC","Kling, Hills and Greenholt","Hintz - Casper","Walter - Swift","Schneider - Kling","Blanda Group","Murphy, Heidenreich and Parker","Jacobs, Dickinson and Ruecker"];
      return companies[Math.floor(Math.random() * companies.length)];
    }

    return {
      getSubrogations: function(){
        return invokeApi($http.get,'/api/Subrogations?filter[include]=claims&filter[include]=case');
      },
      getEligibilities: function(){
        return invokeApi($http.get,'/api/Eligibilities?filter[include]=eligibilityClaims&filter[include]=case');
      },
      createCase: function(data){
        return invokeApi($http.post,'/api/Cases',data);
      },
      createSubrogation: function(subrogation){
        return invokeApi($http.post,'/api/Cases/' + subrogation.case.id + '/subrogations',subrogation);
      },
      createEligibility: function(eligibility){
        return invokeApi($http.post,'/api/Cases/' + eligibility.case.id + '/eligibilities',eligibility);
      },
      createSubrogationClaim:function(subrogationId,claim){
        return invokeApi($http.post,'/api/Subrogations/' + subrogationId + '/claims',claim);
      },
      createEligibilityClaim:function(eligibilityId,claim){
        return invokeApi($http.post,'/api/Eligibilities/' + eligibilityId + '/eligibilityClaims',claim);
      },
      updateCase: function(data){
        return invokeApi($http.put,'/api/Cases/' + data.id,data);
      },
      updateSubrogation: function(subrogation){
        return invokeApi($http.put,'/api/Subrogations/' + subrogation.id, subrogation);
      },
      updateEligibility: function(eligibility){
        return invokeApi($http.put,'/api/Eligibilities/' + eligibility.id, eligibility);
      },
      updateSubrogationClaim:function(claim){
        return invokeApi($http.put,'/api/SubrogationClaims/' + claim.id,claim);
      },
      updateEligibilityClaim:function(claim){
        return invokeApi($http.put,'/api/EligibilityClaims/' + claim.id,claim);
      },
      deleteSubrogationClaim:function(claim){
        return invokeApi($http.delete,'/api/SubrogationClaims/' + claim.id);
      },
      deleteEligibilityClaim:function(claim){
        return invokeApi($http.delete,'/api/EligibilityClaims/' + claim.id);
      },
      getProcessedCases:function(){
        return invokeApi($http.get,'/api/processedCases');
      },
      generateFakeSubrogation:function(){
        function makeClaim(){
          return {
            claim_reference: getStr(8),
            claim_member:getName(),
            claim_provider:getCompany(),
            claim_amount:Math.floor(Math.random() * 85000)
          };
        }
        var data = {
          case:{
            case_ref: getStr(10),
            case_type:'SUBROGATION'
          },
          claims:[],
          client:getCompany()
        }
        var nClaims = Math.floor(Math.random() * 7) + 2;
        for (var i = 0; i < nClaims; i++) {
          data.claims.push(makeClaim());
        }
        console.log(data);
        return data;
      },
      generateFakeEligibility:function(){
        function makeClaim(){
          return {
            claim_reference: getStr(8),
            claim_provider:getCompany(),
            claim_amount:Math.floor(Math.random() * 85000)
          };
        }
        var data = {
          case:{
            case_ref: getStr(10),
            case_type:'ELIGIBILITY'
          },
          eligibilityClaims:[],
          member:getName()
        }
        var nClaims = Math.floor(Math.random() * 7) + 2;
        for (var i = 0; i < nClaims; i++) {
          data.eligibilityClaims.push(makeClaim());
        }
        console.log(data);
        return data;
      },

      submitCase:function(caseObj){
        var data = {
          "proc:Create_CaseRequest":{
            "@xmlns":{
              "proc":"http:\/\/launchpoint.everteam.com\/Processes\/Core\/workflow\/process",
              "laun":"http:\/\/launchpoint.everteam.com"
            },
            "laun:caseId":{
              "$":caseObj.caseId
            }
          }
        }
        return invokeApi(
          $http.post,
          '/everteam/ode/processes/LaunchPoint_Processes_Core_workflow_process_data_records',
          data,{
          headers:{
            'Content-Type':'application/json/badgerfish'
          }
        });
      },
      submitCaseChanged:function(caseObj){
        var data = {
          "proc:Case_changedRequest":{
            "@xmlns":{
              "proc":"http:\/\/launchpoint.everteam.com\/Processes\/Core\/workflow\/process",
              "laun":"http:\/\/launchpoint.everteam.com"
            },
            "laun:caseId":{
              "$":caseObj.CASEID
            }
          }
        }
        console.log(data);
        return invokeApi(
          $http.post,
          '/everteam/ode/processes/LaunchPoint_Processes_Core_workflow_process_data_records',
          data,{
          headers:{
            'Content-Type':'application/json/badgerfish'
          }
        });
      }
    };
  }]);
