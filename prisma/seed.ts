import { saltValue } from '../src/app/utils/auth';
import db from './db.setup';

const clearDb = async () => {
  await db.user.deleteMany();
  await db.password.deleteMany();
  await db.userUrlShorts.deleteMany();
  await db.shortenedUrls.deleteMany();
  await db.resetPassword.deleteMany();
};

export const seed = async () => {
  console.log('Seeding the database...');

  await clearDb();
  await db.user.create({
    data: {
      username: 'mikesz88',
      password: {
        create: {
          password: await saltValue('jeepDuck1t!'),
        },
      },
    },
  });
};

seed()
  .then(() => {
    console.log('Seeding complete');
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await db.$disconnect();
  });
