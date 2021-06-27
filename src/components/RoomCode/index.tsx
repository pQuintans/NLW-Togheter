import toast from 'react-hot-toast';
import copyImg from '../../assets/images/copy.svg'

import './styles.scss'

type RoomCodeProps = {
  code: string;
  theme?: string;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
    if (props.theme === 'dark') {
      toast.success(("Código copiado para a área de tranferência."), {
        style: {
          background: '#333',
          color: '#fff',
        },
      })
    } else {
      toast.success("Código copiado para a área de tranferência.");
    }
  }

  return (
    <button id='room-code'className={props.theme} onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  )
}