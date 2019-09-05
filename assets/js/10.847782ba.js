(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{271:function(e,t,a){"use strict";a.r(t);var s=a(38),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"generic-installation-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generic-installation-process","aria-hidden":"true"}},[e._v("#")]),e._v(" Generic installation process")]),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Pixelfed is still a work in progress. We do not recommending running an instance in production at this stage unless you know what you are doing!")])]),e._v(" "),a("p",[e._v("Make sure you have all prerequisites installed and the appropriate services running/enabled.")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#download-source-via-git"}},[e._v("Download source via Git")])]),a("li",[a("a",{attrs:{href:"#set-correct-permissions"}},[e._v("Set correct permissions")])]),a("li",[a("a",{attrs:{href:"#initialize-php-dependencies"}},[e._v("Initialize PHP dependencies")])]),a("li",[a("a",{attrs:{href:"#configure-pixelfed"}},[e._v("Configure Pixelfed")]),a("ul",[a("li",[a("a",{attrs:{href:"#app-variables"}},[e._v("App variables")])]),a("li",[a("a",{attrs:{href:"#database-variables"}},[e._v("Database variables")])]),a("li",[a("a",{attrs:{href:"#redis-variables"}},[e._v("Redis variables")])]),a("li",[a("a",{attrs:{href:"#email-variables"}},[e._v("Email variables")])]),a("li",[a("a",{attrs:{href:"#additional-variables"}},[e._v("Additional variables")])])])]),a("li",[a("a",{attrs:{href:"#final-steps"}},[e._v("Final steps")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"download-source-via-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-source-via-git","aria-hidden":"true"}},[e._v("#")]),e._v(" Download source via Git")]),e._v(" "),a("p",[e._v("Pixelfed Beta currently uses the "),a("code",[e._v("dev")]),e._v(" branch for deployable code. When v1.0 is released, the stable branch will be changed to "),a("code",[e._v("master")]),e._v(", with "),a("code",[e._v("dev")]),e._v(" branch being used for development and testing.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /home "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or wherever you choose to install web applications")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone -b dev https://github.com/pixelfed/pixelfed.git pixelfed "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# checkout dev branch into "pixelfed" folder')]),e._v("\n")])])]),a("h2",{attrs:{id:"set-correct-permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-correct-permissions","aria-hidden":"true"}},[e._v("#")]),e._v(" Set correct permissions")]),e._v(" "),a("p",[e._v("Your web server and app processes need to be able to write to the Pixelfed directory. Make sure to set the appropriate permissions. For example, if you are running your processes through the "),a("code",[e._v("http")]),e._v(" user/group, then run the following:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" pixelfed\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R http:http "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# change user/group to http user and http group")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" -type d -exec "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("755")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# set all directories to rwx by user/group")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" -type f -exec "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("644")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# set all files to rw by user/group")]),e._v("\n")])])]),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("User and group permissions")]),e._v(" "),a("p",[e._v("Make sure to use the correct user/group name for your system. This may be "),a("code",[e._v("http")]),e._v(", "),a("code",[e._v("www-data")]),e._v(", or "),a("code",[e._v("pixelfed")]),e._v(" (if using a dedicated user).")]),e._v(" "),a("p",[e._v("If you created a dedicated app user, make sure to either add the app user to the web group, or add the web user to the app group. Also, you will need to set 775 for directories and 664 for files, so that both your dedicated app user and your web user can read and write to files in the Pixelfed installation.")])]),e._v(" "),a("h2",{attrs:{id:"initialize-php-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialize-php-dependencies","aria-hidden":"true"}},[e._v("#")]),e._v(" Initialize PHP dependencies")]),e._v(" "),a("p",[e._v("Run "),a("code",[e._v("composer install")]),e._v(" to fetch the dependencies needed by Pixelfed. It is recommended to run with the following flags:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ composer "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --no-ansi --no-interaction --optimize-autoloader\n")])])]),a("h2",{attrs:{id:"configure-pixelfed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-pixelfed","aria-hidden":"true"}},[e._v("#")]),e._v(" Configure Pixelfed")]),e._v(" "),a("p",[e._v("By default Pixelfed comes with a "),a("code",[e._v(".env.example")]),e._v(" file for production deployments, and a "),a("code",[e._v(".env.testing")]),e._v(" file for debug deployments. You'll need to rename or copy one of these files to "),a("code",[e._v(".env")]),e._v(" regardless of which environment you're working on.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" .env.example .env "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# for production deployments")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" .env.testing .env "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# for debug deployments")]),e._v("\n")])])]),a("p",[e._v("You can now edit "),a("code",[e._v(".env")]),e._v(" and change values for your setup.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("List of environment variables")]),e._v(" "),a("p",[e._v("You can find a list of additional configuration settings in-depth on the "),a("router-link",{attrs:{to:"/technical-documentation/env.html"}},[e._v("Configuration")]),e._v(" page, but the important variables will be listed in the below subsections.")],1)]),e._v(" "),a("h3",{attrs:{id:"app-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-variables","aria-hidden":"true"}},[e._v("#")]),e._v(" App variables")]),e._v(" "),a("ul",[a("li",[e._v("Set "),a("code",[e._v("APP_NAME")]),e._v(" to your desired title, e.g. "),a("code",[e._v("Pixelfed")]),e._v(". This will be shown in the header bar and other places.")]),e._v(" "),a("li",[e._v("Ensure that "),a("code",[e._v("APP_DEBUG")]),e._v(" is "),a("code",[e._v("false")]),e._v(" for production environments, or "),a("code",[e._v("true")]),e._v(" for debug environments.")]),e._v(" "),a("li",[e._v("Set your "),a("code",[e._v("APP_URL")]),e._v(" to the HTTPS URL that you wish to serve Pixelfed through, e.g. "),a("code",[e._v("https://pixelfed.example")])]),e._v(" "),a("li",[e._v("Set "),a("code",[e._v("APP_DOMAIN")]),e._v(", "),a("code",[e._v("ADMIN_DOMAIN")]),e._v(", and "),a("code",[e._v("SESSION_DOMAIN")]),e._v(" to the domain name you will be using for Pixelfed, e.g. "),a("code",[e._v("pixelfed.example")])])]),e._v(" "),a("h3",{attrs:{id:"database-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-variables","aria-hidden":"true"}},[e._v("#")]),e._v(" Database variables")]),e._v(" "),a("p",[e._v("By default, the values provided will allow connecting to MySQL or MariaDB over the default localhost TCP connection.")]),e._v(" "),a("p",[e._v("If you are running Postgres:")]),e._v(" "),a("ul",[a("li",[e._v("Set "),a("code",[e._v("DB_CONNECTION")]),e._v(" to "),a("code",[e._v("pgsql")]),e._v(" instead of "),a("code",[e._v("mysql")]),e._v(".")])]),e._v(" "),a("p",[e._v("If you are running your SQL server on a different machine or port:")]),e._v(" "),a("ul",[a("li",[e._v("Set "),a("code",[e._v("DB_HOST")]),e._v(" to the IP of the machine")]),e._v(" "),a("li",[e._v("Set "),a("code",[e._v("DB_PORT")]),e._v(" to the port on which your database server is exposed")])]),e._v(" "),a("p",[e._v("To connect to the database you created:")]),e._v(" "),a("ul",[a("li",[e._v("Set "),a("code",[e._v("DB_DATABASE")]),e._v(" to the name of the database created for Pixelfed")]),e._v(" "),a("li",[e._v("Set "),a("code",[e._v("DB_USERNAME")]),e._v(" to the user that was granted privileges for that database")]),e._v(" "),a("li",[e._v("Set "),a("code",[e._v("DB_PASSWORD")]),e._v(" to the password that identifies the user with privileges to the database")])]),e._v(" "),a("h3",{attrs:{id:"redis-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-variables","aria-hidden":"true"}},[e._v("#")]),e._v(" Redis variables")]),e._v(" "),a("p",[e._v("If you are running Redis over TCP on the same machine as Pixelfed, then the default settings will work.")]),e._v(" "),a("p",[e._v("If you are running Redis on another machine:")]),e._v(" "),a("ul",[a("li",[e._v("Set "),a("code",[e._v("REDIS_HOST")]),e._v(" to the IP of the machine your Redis server is running on")]),e._v(" "),a("li",[e._v("Set "),a("code",[e._v("REDIS_PORT")]),e._v(" to the port on which Redis is exposed")]),e._v(" "),a("li",[e._v("Set "),a("code",[e._v("REDIS_PASSWORD")]),e._v(" to the password of that Redis server")])]),e._v(" "),a("p",[e._v("If you are using a UNIX socket for Redis, then:")]),e._v(" "),a("ul",[a("li",[e._v("Set "),a("code",[e._v("REDIS_SCHEME")]),e._v(" to "),a("code",[e._v("unix")])]),e._v(" "),a("li",[e._v("Set "),a("code",[e._v("REDIS_PATH")]),e._v(" to the path of the socket, e.g. "),a("code",[e._v("/run/redis/redis.sock")])])]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TCP server vs. UNIX socket")]),e._v(" "),a("p",[e._v("Redis usually comes pre-configured to listen for TCP requests on the local machine over port 6379. In your Redis configuration, typically at "),a("code",[e._v("/etc/redis.conf")]),e._v(", the relevant lines are "),a("code",[e._v("bind 127.0.0.1")]),e._v(" and "),a("code",[e._v("port 6379")]),e._v(".")]),e._v(" "),a("p",[e._v("Changing the latter line to "),a("code",[e._v("port 0")]),e._v(" will disable TCP listening, in which case Redis must be configured for socket access. Lines such as "),a("code",[e._v("unixsocket /run/redis/redis.sock")]),e._v(" and "),a("code",[e._v("unixsocketperm 770")]),e._v(" must be set to enable socket access. Additionally, both the app user and web user should have permission to access the socket, e.g. by being added to the "),a("code",[e._v("redis")]),e._v(" group.")]),e._v(" "),a("p",[e._v("Using a UNIX socket is optional, but may provide faster access since it does not have to create TCP packets. TCP is usually used over a network, and would be required if Redis were running on a different machine than your web server.")])]),e._v(" "),a("h3",{attrs:{id:"email-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#email-variables","aria-hidden":"true"}},[e._v("#")]),e._v(" Email variables")]),e._v(" "),a("p",[e._v("By default, Pixelfed will not send any emails, but will instead write messages to the Laravel log.")]),e._v(" "),a("p",[e._v("To setup a mailer for production deployments, you have several options for supported mail services. "),a("router-link",{attrs:{to:"/technical-documentation/env.html"}},[e._v("Configuration#mail")])],1),e._v(" "),a("h3",{attrs:{id:"additional-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-variables","aria-hidden":"true"}},[e._v("#")]),e._v(" Additional variables")]),e._v(" "),a("p",[e._v("If you are using ImageMagick, then:")]),e._v(" "),a("ul",[a("li",[e._v("Set "),a("code",[e._v("IMAGE_DRIVER")]),e._v(" to "),a("code",[e._v("imagick")])])]),e._v(" "),a("p",[e._v("For testing environments:")]),e._v(" "),a("ul",[a("li",[e._v("Set "),a("code",[e._v("ENFORCE_EMAIL_VERIFICATION")]),e._v(" to "),a("code",[e._v("false")])])]),e._v(" "),a("p",[e._v("For production environments, you will probably want to set various config values related to your deployment. A full list of environment variables can be found "),a("router-link",{attrs:{to:"/technical-documentation/env.html"}},[e._v("here.")])],1),e._v(" "),a("h2",{attrs:{id:"final-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#final-steps","aria-hidden":"true"}},[e._v("#")]),e._v(" Final steps")]),e._v(" "),a("p",[e._v("If you copied "),a("code",[e._v(".env.testing")]),e._v(" to set up a development environment, the application secret is pre-generated for you. If you copied "),a("code",[e._v(".env.example")]),e._v(" to set up a production environment, then you need to generate the secret "),a("code",[e._v("APP_KEY")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ php artisan key:generate\n")])])]),a("p",[e._v("Every time you edit your .env file, you must run this command to have the changes take effect:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ php artisan config:cache\n")])])]),a("p",[e._v("One time only, the "),a("code",[e._v("storage/")]),e._v(" directory must be linked to the application:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ php artisan storage:link\n")])])]),a("p",[e._v("Database migrations must be run:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ php artisan migrate --force\n")])])]),a("p",[e._v("If you want to access the Horizon web dashboard:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ php artisan horizon:install\n$ php artisan horizon:assets\n")])])]),a("p",[e._v("Routes should be cached whenever the source code changes:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ php artisan route:cache\n")])])])])},[],!1,null,null,null);t.default=r.exports}}]);