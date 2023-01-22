var featured = _.template(
    "<div class='featured large-4 medium-6 columns'>" +
      "<a href= <%= url %> >" +
        "<div class='featured-image'>" +
          "<img src= <%= image %> alt ='<%= title %>' class='img-responsive'>" +
          "<div class='featured-image-overlay'>" +
          "</div>" +
        "</div>" +
      "</a>" +
      "<div class='content-section'>" +
        "<h4><%= title %></h4>" +
        "<h5><%= medium %><br/><%= year %></h5>" +
        "<p><%= description %></p>" +
      "</div>" +
    "</div>"

);

var newsArticle = _.template(
    "<div class='article-container small-10 small-centered columns'>" +
      "<article class='individual-article'>" +
        "<h3><%= date %> | <%= publication %></h3>" +
        "<h4><a href= <%= url %> target='_blank'><%= title %></a> 💫 <%= author %></h4>" +
        "<%= text %>" +
      "</article>" +
    "</div>"
);

var fixedTopBarNavigation = _.template(
    "<nav class='top-bar' data-topbar>" +
      "<ul class='title-area'>" +
        "<li class='name'>" +
           "<h1><a href='/'>EMILY MARTINEZ</a></h1>" +
        "</li>" +
        "<li class='toggle-topbar menu-icon'><a href='#''><span></span></a></li>" +
      "</ul>" +
      "<section class='top-bar-section'>" +
        "<ul class='right'>" +
        "<li class='has-dropdown'>" +
          "<a href='index.html'>PROJECTS</a>" +
          "<ul class='dropdown'>" +
            "<li><a href='ultimatefantasy.html'>Ultimate Fantasy</a></li>" +
            "<li><a href='unsupervisedpleasures.html'>Unsupervised Pleasures</a></li>" +
            "<li><a href='zines.html'>Queer AI Zines</a></li>" +
            "<li><a href='ml5toolkit.html'>ML5 Community Starter Kit</a></li>" +
            "<li><a href='queerai.html'>Queer AI Chatbots</a></li>" +
            "<li><a href='insufferable-whiteness-of-being.html'>The Insufferable Whiteness of Being</a></li>" +
            "<li><a href='risk.html'>Risk</a></li>" +
            "<li><a href='cockunblocker.html'>Cock Unblocker</a></li>" +
            "<li><a href='bro.html'>2018, Bro!</a></li>" +
            "<li><a href='unthinking.html'>Unthinking the Sharing Economy</a></li>" +
            "<li><a href='future.html'>The Future of Work</a></li>" +
            "<li><a href='futureofwork.html'>Future of Work Testimonials</a></li>" +
            "<li><a href='5easysteps.html'>How to Make Yourself Into A Commissioning Body</a></li>" +
            "<li><a href='wwwork.html'>WWWORK</a></li>" +
            "<li><a href='makingyou.html'>Making You</a></li>" +
            "<li><a href='anxious.html'>Anxious to Make</a></li>" +
            "<li><a href='cocaine.html'>Portraits of Cocaine</a></li>" +
            "<li><a href='oyegringa.html'>Oye, gringa!</a></li>" +
            "<li><a href='homeland.html'>homelandsecurityhearts.us</a></li>" +
            "<li><a href='anti-apocalypse.html'>Anti-Apocalypse</a></li>" +
            "<li><a href='A.M.html'>A.M.</a></li>" +
            "<li><a href='intheory.html'>In Theory</a></li>" +
            "<li><a href='billiondollarpyramid.html'>$1B &#8710;</a></li>" +
            "<li><a href='yoga.html'>LA5D</a></li>" +
            "<li><a href='mysteryprize.html'>mysteryPrize( )</a></li>" +
            "<li><a href='balbonemartinez.html'>Balbone Martinez</a></li>" +
            "<li><a href='funwithnumbers.html'>Fun with Numbers!</a></li>" +
            "<li><a href='meditations.html'>Meditations</a></li>" +
            "<li><a href='disasters.html'>Disasters</a></li>" +
          "</ul>" +
        "</li>" +
          "<li><a href='about.html'>BIO</a></li>" +
          "<li><a href='press.html'>NEWS</a></li>" +
          "<li><a href='contact.html'>CONTACT</a></li>" +
          "<li><a href='cv.html'>CV</a></li>" +
          "<li><a href='https://www.instagram.com/queerai/' target='_blank'><i class='fa fa-instagram'></i></a></li>" +
          "<li><a href='https://twitter.com/Resonator11' target='_blank'><i class='fa fa-twitter'></i></a></li>" +
        "</ul>" +
      "</section>" +
    "</nav>"
);

var balboneMartinez = _.template(
    "<h2><em><%= title %></em></h2>" +
    "<h4><%= medium %><br/><%= size %><br/><%= year %></h4>" +
    "<div class='bm'>" +
    "<img src='img/<%= image %>' alt='Balbone Martinez: <%= title %>'/>" +
    "<p><%= description %></p>" +
    "</div>" +
    "<h5>A selection of works by Balbone Martinez<br/>2007-2010</h5>" +
    "<p>" +
    "<a href='enter.html'>You, a house. . .</a><br />" +
    "<a href='parables.html'>Speaking in Parables. . .</a><br />" +
    "<a href='akasha.html'>Godhead</a><br />" +
    "<a href='bedtime.html'>Baby's Bedtime</a><br /> " +
    "<a href='andtheholyghost.html'>. . . and The Holy Ghost</a><br />" +
    "<a href='seasidefringe.html'>Seaside Fringe</a><br />" +
    "<a href='multiply.html'>They Keep Multiplying</a><br />" +
    "<a href='lastsupper2.html'>Last Supper II</a><br />" +
    "<a href='everythingisfine.html'>Everything is Fine</a><br />" +
    "<a href='pcriot.html'>PC RIOT</a><br />" +
    "<a href='tedhaggard.html'>Ted Haggard</a><br />" +
    "<a href='wishes.html'>Wishes Won't Do Dishes. . .</a><br />" +
    "<a href='debatenight.html'>Debate Night in America</a><br /> " +
    "<a href='whatshappening.html'>What\'s Happening?</a><br />" +
    "<a href='empireworldtowers.html'>EMPIRE WORLD TOWERS 2K15</a><br />" +
    "<a href='cancerman.html'>Cancer Man</a><br />" +
    "<a href='crossyoureyes.html'>Cross Your Eyes</a><br />" +
    "<a href='unitedstates.html'>United States</a><br />" +
    "<a href='installation.html'>(installation view)</a>" +
    "</p>"
);

var bmTitle = _.template(
    "<%= title %>"
);

var bmUrl = _.template(
    "<%= url %>"
);

var bmBackground = _.template(
    "<%= bgimg %>"
);

var bmMenu = _.template(
  "<p>" +
  "<a href='enter.html'>You, a house. . .</a><br />" +
  "<a href='parables.html'>Speaking in Parables. . .</a><br />" +
  "<a href='akasha.html'>Godhead</a><br />" +
  "<a href='bedtime.html'>Baby's Bedtime</a><br /> " +
  "<a href='andtheholyghost.html'>. . . and The Holy Ghost</a><br />" +
  "<a href='seasidefringe.html'>Seaside Fringe</a><br />" +
  "<a href='multiply.html'>They Keep Multiplying</a><br />" +
  "<a href='lastsupper2.html'>Last Supper II</a><br />" +
  "<a href='everythingisfine.html'>Everything is Fine</a><br />" +
  "<a href='pcriot.html'>PC RIOT</a><br />" +
  "<a href='tedhaggard.html'>Ted Haggard</a><br />" +
  "<a href='wishes.html'>Wishes Won't Do Dishes. . .</a><br />" +
  "<a href='debatenight.html'>Debate Night in America</a><br /> " +
  "<a href='whatshappening.html'>What\'s Happening?</a><br />" +
  "<a href='empireworldtowers.html'>EMPIRE WORLD TOWERS 2K15</a><br />" +
  "<a href='cancerman.html'>Cancer Man</a><br />" +
  "<a href='crossyoureyes.html'>Cross Your Eyes</a><br />" +
  "<a href='unitedstates.html'>United States</a><br />" +
  "<a href='parablesinstall1.html'>(installation view)</a>" +
  "</p>"
);

function balbone(e) {
  var title = "Balbone Martinez: " + bmTitle(balmar.works[e]);
  var url = "[href^='" + bmUrl(balmar.works[e]) + "']";
  $(".bm-menu").append(balboneMartinez(balmar.works[e]));
  $("title").append(title);
  $("" + url + "").addClass("bm-active");
}

function bmNav() {
  $(".bm-menu").append(bmMenu);
}

function featuredAll() {
  var i = 0,
      toString = "";
  for (i = 0; i < data.works.length; i++) {
    toString += featured(data.works[i]);
  }
  $(".row.featured-all").append(toString);
}

function newsAll() {
  var i = 0,
      toString = "";
  for (i = 0; i < press.articles.length; i++) {
    toString += newsArticle(press.articles[i]);
  }
  $(".row.articles-all").append(toString);
}

function topNav(n) {
  $(".fixed").append(fixedTopBarNavigation);
  $(n).parent().addClass("active");
}
