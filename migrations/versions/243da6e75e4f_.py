"""empty message

Revision ID: 243da6e75e4f
Revises: adfc69958784
Create Date: 2021-04-28 03:31:02.715473

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '243da6e75e4f'
down_revision = 'adfc69958784'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tutorial',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=120), nullable=False),
    sa.Column('description', sa.String(length=200), nullable=False),
    sa.Column('link', sa.String(length=200), nullable=False),
    sa.Column('img', sa.String(length=200), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('title')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tutorial')
    # ### end Alembic commands ###
