#!/bin/bash
# EduGame Pro — Backend quick setup
set -e

echo "==> Creating virtual environment..."
python3 -m venv venv
source venv/bin/activate

echo "==> Installing dependencies..."
pip install -r requirements.txt

echo "==> Copying .env file..."
if [ ! -f .env ]; then
  cp .env.example .env
  echo "    ⚠️  Edit .env with your real DB credentials before continuing!"
  exit 0
fi

echo "==> Running migrations..."
python manage.py makemigrations
python manage.py migrate

echo "==> Creating Django superuser for /admin panel..."
python manage.py createsuperuser --noinput --username admin --email admin@mail.uz || true

echo ""
echo "✅ Setup complete! Start the server with:"
echo "   source venv/bin/activate && python manage.py runserver"
