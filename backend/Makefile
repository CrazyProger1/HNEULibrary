
.PHONY: shell
shell:
	poetry run python manage.py shell


.PHONY: logs
logs:
	tail -f *.log


.PHONY: migrations
migrations:
	poetry run python manage.py makemigrations


.PHONY: migrate
migrate:
	poetry run python manage.py migrate


.PHONY: superuser
superuser:
	poetry run python manage.py createsuperuser --no-input


.PHONY: update
update:
	git pull && rm poetry.lock && poetry install --no-root && supervisorctl restart library
	make migrate


.PHONY: i18n.extract
i18n.extract:
	poetry run pybabel extract -F babel.cfg -o locale/messages.pot .


.PHONY: i18n.init
i18n.init:
	poetry run pybabel init -i locale/messages.pot -d locale -l uk


.PHONY: i18n.compile
i18n.compile:
	poetry run pybabel compile -d locale
