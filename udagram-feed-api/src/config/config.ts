export const config = {
    'username': process.env.POSTGRESS_USERNAME,
    'password': process.env.POSTGRESS_PASSWORD,
    'database': process.env.POSTGRESS_DATABASE,
    'host': process.env.POSTGRESS_HOST,
    'dialect': 'postgres',
    'aws_region': process.env.AWS_REGION,
    'aws_profile': process.env.AWS_PROFILE,
    'aws_media_bucket': process.env.AWS_MEDIA_BUCKET,
    'url': process.env.URL,
    'ui_url': process.env.UI_URL,
    'jwt': {
        'secret': process.env.JWT_SECRET,
    },
    'aws_access_key_id': process.env.AWS_ACCESS_KEY_ID,
    'aws_secret_access_key': process.env.AWS_SECRET_ACCESS_KEY
};
