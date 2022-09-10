import getCommentsCount from '../modules/getCommentsCount';

const testObj = [
  {
    creation_date: '2022-09-07',
    username: 'Okumu',
    comment: 'Awesome movie',
  },
  {
    username: 'Keria',
    creation_date: '2022-09-08',
    comment: 'I love this show!',
  },
  {
    username: 'Khaleesi',
    comment: 'Mother of Dragons',
    creation_date: '2022-09-08',
  },
];

describe('Test Case to check comment count', () => {
  it('Calls getCommentsCount Function with a data object', () => {
    const commentCount = getCommentsCount(testObj);

    expect(commentCount).toEqual(3);
  });
});