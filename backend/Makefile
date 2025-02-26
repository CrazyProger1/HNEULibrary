
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
	python manage.py createsuperuser --no-input
