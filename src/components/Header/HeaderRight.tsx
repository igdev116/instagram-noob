import { useRouter } from 'next/router';

import clsx from 'clsx';

import { MODAL_TYPES, useModalContext } from '~/contexts/ModalContext';
import { ROUTES } from '~/constants';

import IconCompass from '../Icon/IconCompass';
import IconCreate from '../Icon/IconCreate';
import IconHeart from '../Icon/IconHeart';
import IconHome from '../Icon/IconHome';
import IconMessenger from '../Icon/IconMessenger';

const HeaderRight = () => {
  const { modalTypes, showModal } = useModalContext();

  const router = useRouter();

  return (
    <div className='flex justify-end gap-x-5'>
      <IconHome
        onClick={() => router.push(ROUTES.HOME)}
        className={clsx('cursor-pointer')}
        active={router.pathname === ROUTES.HOME}
      />
      <IconMessenger
        onClick={() => router.replace(ROUTES.INBOX, undefined, { shallow: true })}
        className={clsx('cursor-pointer')}
        active={router.pathname === ROUTES.INBOX}
      />
      <IconCreate
        onClick={() => showModal(MODAL_TYPES.POST_CREATOR)}
        className={clsx('cursor-pointer')}
        active={modalTypes.includes(MODAL_TYPES.POST_CREATOR)}
      />
      <IconCompass className={clsx('cursor-pointer')} active={false} />
      <IconHeart className={clsx('cursor-pointer')} active={false} />
    </div>
  );
};

export default HeaderRight;
