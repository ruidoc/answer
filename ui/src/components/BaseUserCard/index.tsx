import { memo, FC } from 'react';
import { Link } from 'react-router-dom';

import { Avatar } from '@/components';
import { formatCount } from '@/utils';

interface Props {
  data: any;
  showAvatar?: boolean;
  avatarSize?: string;
  avatarSearchStr?: string;
  className?: string;
}

const Index: FC<Props> = ({
  data,
  showAvatar = true,
  avatarSize = '20px',
  className = 'fs-14',
  avatarSearchStr = 's=48',
}) => {
  return (
    <div className={`text-secondary ${className}`}>
      {data?.status !== 'deleted' ? (
        <Link to={`/users/${data?.username}`}>
          {showAvatar && (
            <Avatar
              avatar={data?.avatar}
              size={avatarSize}
              className="me-1"
              searchStr={avatarSearchStr}
            />
          )}
          <span className="me-1 text-break">{data?.display_name}</span>
        </Link>
      ) : (
        <>
          {showAvatar && (
            <Avatar
              avatar={data?.avatar}
              size={avatarSize}
              className="me-1"
              searchStr={avatarSearchStr}
            />
          )}
          <span className="me-1 text-break">{data?.display_name}</span>
        </>
      )}

      <span className="fw-bold" title="Reputation">
        {formatCount(data?.rank)}
      </span>
    </div>
  );
};

export default memo(Index);
