VERSION=2.0.0
BOOTSTRAP = ./bootstrap.css
BOOTSTRAP_MIN = ./bootstrap.min.css
BOOTSTRAP_LESS = ./lib/bootstrap.less
LESS_COMPESSOR ?= `which lessc`
UGLIFY_JS ?= `which uglifyjs`
WATCHR ?= `which watchr`
JS_DIR = ./js
JS_MIN = ./js/min
JS_MIN_BOOTSTRAP = ./js/min/bootstrap.js
JS_COPYRIGHT = ./js/copyright
JS_FILES = bootstrap-transitions.js bootstrap-alert.js bootstrap-modal.js bootstrap-dropdown.js bootstrap-scrollspy.js bootstrap-twipsy.js bootstrap-tab.js bootstrap-popover.js bootstrap-button.js bootstrap-collapse.js bootstrap-carousel.js bootstrap-linkrow.js
JQUERY_FILES = jquery.ckeditor.js jquery.maskedinput.js jquery.placeholder.js

build:
	@@if test ! -z ${LESS_COMPESSOR}; then \
		sed -e 's/@VERSION/'"v${VERSION}"'/' -e 's/@DATE/'"`date`"'/' <${BOOTSTRAP_LESS} >${BOOTSTRAP_LESS}.tmp; \
		lessc ${BOOTSTRAP_LESS}.tmp > ${BOOTSTRAP}; \
		lessc ${BOOTSTRAP_LESS}.tmp > ${BOOTSTRAP_MIN} --compress; \
		rm -f ${BOOTSTRAP_LESS}.tmp; \
		echo "Bootstrap successfully built! - `date`"; \
	else \
		echo "You must have the LESS compiler installed in order to build Bootstrap."; \
		echo "You can install it by running: npm install less -g"; \
	fi

uglify:
	@@if test ! -z ${UGLIFY_JS}; then \
		mkdir -p js/min; \
		cp js/copyright ${JS_MIN_BOOTSTRAP}; \
		for FILE in ${JS_FILES}; do \
			uglifyjs -o ${JS_MIN}/$$FILE ${JS_DIR}/$$FILE; \
			( uglifyjs -nc ${JS_DIR}/$$FILE; echo ) >> ${JS_MIN_BOOTSTRAP}; \
		done; \
	else \
		echo "You must have the UGLIFYJS minifier installed in order to minify Bootstrap's js."; \
		echo "You can install it by running: npm install uglify-js -g"; \
	fi

jquery:
	@@if test ! -z ${UGLIFY_JS}; then \
		( for FILE in ${JQUERY_FILES}; do ${UGLIFY_JS} jquery/$$FILE; echo; done ) > jquery/jquery-plugins.min.js; \
	else \
		echo "You must have the UGLIFYJS minifier installed in order to build jquery-plugins.min.js."; \
		echo "You can install it by running: npm install uglify-js -g"; \
	fi

watch:
	@@if test ! -z ${WATCHR}; then \
	  echo "Watching less files..."; \
	  watchr -e "watch('lib/.*\.less') { system 'make' }"; \
	else \
		echo "You must have the watchr installed in order to watch Bootstrap less files."; \
		echo "You can install it by running: gem install watchr"; \
	fi

.PHONY: build jquery watch

