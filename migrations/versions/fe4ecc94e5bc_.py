"""empty message

<<<<<<< HEAD:migrations/versions/fe4ecc94e5bc_.py
Revision ID: fe4ecc94e5bc
Revises: 
Create Date: 2021-05-01 03:14:33.052485
=======
Revision ID: 05ffa684f83e
Revises: 
Create Date: 2021-05-01 17:37:39.001918
>>>>>>> ae63ee7e32bddd936fba61fa2f54b903068cb9e2:migrations/versions/05ffa684f83e_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<< HEAD:migrations/versions/fe4ecc94e5bc_.py
revision = 'fe4ecc94e5bc'
=======
revision = '05ffa684f83e'
>>>>>>> ae63ee7e32bddd936fba61fa2f54b903068cb9e2:migrations/versions/05ffa684f83e_.py
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tutorial',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('title', sa.String(length=120), nullable=False),
    sa.Column('description', sa.String(length=200), nullable=False),
    sa.Column('link', sa.String(length=200), nullable=False),
    sa.Column('img', sa.String(length=200), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('title')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('lastname', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('favorites',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('tutorial_id', sa.Integer(), nullable=True),
    sa.Column('tutorial_title', sa.String(length=120), nullable=False),
    sa.Column('tutorial_link', sa.String(length=200), nullable=False),
    sa.ForeignKeyConstraint(['tutorial_id'], ['tutorial.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('favorites')
    op.drop_table('user')
    op.drop_table('tutorial')
    # ### end Alembic commands ###
