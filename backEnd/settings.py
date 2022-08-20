from pathlib import Path
import os
import django_heroku
import cloudinary

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
STATIC_DIR = Path(BASE_DIR, 'static')


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
KEY = os.environ["MYMEDEAR_SECRET_KEY"]
SECRET_KEY = KEY

# Configuration for Cloudinary images storage
CLOUDINARY_API_Key = os.environ.get("CLOUDINARY_API_Key")
CLOUDINARY_API_Secret_Key = os.environ.get("CLOUDINARY_API_Secret_key")


cloudinary.config(cloud_name='opera-ocean',
                  api_key=CLOUDINARY_API_Key,
                  api_secret=CLOUDINARY_API_Secret_Key,
                  secure = True
                  )
# api_proxy='http://proxy.server:3128',  -- when using with pythonanywhere

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['mymedear.herokuapp.com', '127.0.0.1']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.sites',             # included
    'whitenoise.runserver_nostatic',    # third party
    'django.contrib.staticfiles',

    # local apps
    'users.apps.UsersConfig',
    'networks.apps.NetworksConfig',

    # third party apps
    'rest_framework',
    'rest_framework.authtoken',
    'knox',
    'corsheaders',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
]

MIDDLEWARE = [ 
    'corsheaders.middleware.CorsMiddleware',            # included
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

    # third party middlewares
    'whitenoise.middleware.WhiteNoiseMiddleware'
]

SITE_ID = 1

REST_FRAMEWORK = {

    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny'
    ],

    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
        'knox.auth.TokenAuthentication'
    ],

    # 'DEFAULT_PAGINATION_CLASS':
    #     'courses.pagination.LimitOffsetPaginationWithUpperBound',
    #     'PAGE_SIZE': 20,

    # 'DEFAULT_FILTER_BACKENDS': (
    #     'django_filters.rest_framework.DjangoFilterBackend',
    #     'rest_framework.filters.OrderingFilter',
    #     'rest_framework.filters.SearchFilter',
    #     ),

    'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema',

    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
        'rest_framework.throttling.UserRateThrottle'
    ],

    # 'DEFAULT_THROTTLE_RATES': {
    #     'anon': '15/hour',
    #     'user': '25/hour',
    #     'courses': '20/hour',
    #     'course_category': '10/hour',
    #     'course_sub_category': '10/hour'
    # },

}

X_FRAME_OPTIONS = 'SAMEORIGIN'

CORS_ALLOWED_ORIGINS = [

    # Production Purpose

    'https://mymedear.com',

    # Development Purpose

    'http://localhost:8081',
    'http://localhost:8000',
    'http://localhost:4200',
    'http://localhost:3000',
    'https://postman.com'
]

CORS_ORIGIN_ALLOW_ALL = True

# CORS_ORIGIN_ALLOW_CREDENTIALS = False

"""
CSRF_TRUSTED_ORIGINS = [
    'http://learnroom.co'
]
"""

AUTHENTICATION_BACKENDS = (
    # Needed to login by username in Django admin, regardless of `allauth`
    "django.contrib.auth.backends.ModelBackend",

    # `allauth` specific authentication methods, such as login by e-mail
    "allauth.account.auth_backends.AuthenticationBackend",
)

ROOT_URLCONF = 'backEnd.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backEnd.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

django_heroku.settings(config=locals(), staticfiles=False, logging=False)


# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = 'static/'
STATIC_ROOT = STATIC_DIR

STATICFILES_STORAGE = 'whitenoise.storage.CompressedStaticFilesStorage'

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'users.User'

LOGIN_REDIRECT_URL = '/'
LOGOUT_REDIRECT_URL = '/'

ACCOUNT_EMAIL_VERIFICATION = 'none'
ACCOUNT_AUTHENTICATION_METHOD = 'email'
ACCOUNT_EMAIL_REQUIRED = True

