import { render, screen } from '../../test-utils';
import { Users } from './Users';
import { server } from '../../mocks/server';
import { rest } from 'msw';

describe('Users', () => {
  it('Should render correctly', () => {
    render(<Users></Users>);

    const heading = screen.getByRole('heading', {
      level: 1,
    });

    expect(heading).toBeInTheDocument();
  });

  it('Should render a list of users', async () => {
    render(<Users></Users>);
    const users = await screen.findAllByRole('listitem');
    expect(users).toHaveLength(3);
  });

  it('Should render error', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (req, res, ctx) => {
          return res(ctx.status(500));
        },
      ),
    );

    render(<Users></Users>);
    const errorText = await screen.findByText('Error fetching users');
    expect(errorText).toBeInTheDocument();
  });
});
