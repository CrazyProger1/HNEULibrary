
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
	git pull & rm poetry.lock & poetry install --no-root & supervisorctl restart library & supervisorctl status