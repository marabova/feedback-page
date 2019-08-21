import writeSingleComment from '../scripts/components/comment';
import { comments } from './__mocks__/comments';
describe('writeSingleComment', () => {
  beforeEach(() => {
    document.body.innerHTML = `<section class="written-comments"></section>`;
  });

  afterEach(() => {});
  it('it should append every comment to the wrapper ', () => {
    const commentsWrapper = document.querySelector('.written-comments');
    writeSingleComment(comments.oneComment[0]);
    const expectedName = document.querySelector('.name');
    const expectedRating = document.querySelector('.rating');
    const expectedEmail = document.querySelector('.email');
    const expectedComment = document.querySelector('.comment');
    expect(expectedName.textContent).toEqual('Mariyana Ivanova');
    expect(expectedRating.textContent).toEqual('1');
    expect(expectedEmail.textContent).toEqual('test@test.com');
    expect(expectedComment.textContent).toEqual('Comment');
  });
});
