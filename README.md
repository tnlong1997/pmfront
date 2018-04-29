# pmfront
Frontend for Primor
---------

### Repo initial setup:

* Require node and npm

* Install angular cli:
	+ For Mac:
	```
	brew install angular-cli
	```

* npm setup:
	+ In pmfront dir:
	```
	npm install
	```

	+ In pmweb dir:
	```
	npm install
	```

* Install git pre-push hooks:
	+ In pmfront dir:
	```
	./scripts/install-hooks.bash
	```

### In repo command:

* Local overall lint test:
   in pmfront directory:
	```
	npm run lint
	```

* Local js lint test:
   in pmfront directory:
	```
	npm run js-lint
	```

* If there is some js lints, auto fix by using:
   in pmfront directory:
	```
	npm run js-lint-fix
	```

* Local css lint test:
   in pmfront directory:
	```
	npm run css-lint
	```

* If there is some js lints, auto fix by using:
   in pmfront directory:
	```
	npm run css-lint-fix
	```

* Local html lint test:
   in pmfront directory:
	```
	npm run html-lint
	```
