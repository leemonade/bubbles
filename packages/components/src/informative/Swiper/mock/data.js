import { ArchiveIcon, StarIcon, DeleteBinIcon, FlagIcon } from '@bubbles-ui/icons/solid';
import { LibraryCard } from '@bubbles-ui/leemons';

export const menuItems = [
  {
    icon: <StarIcon />,
    children: 'Item 1',
    onClick: () => alert('Item 1 clicked'),
  },
  {
    icon: <DeleteBinIcon />,
    children: 'Item 2',
    onClick: () => alert('Item 1 clicked'),
  },
  {
    icon: <FlagIcon />,
    children: 'Item 3',
    onClick: () => alert('Item 3 clicked'),
  },
];

export const deadlineProps = {
  icon: <ArchiveIcon width={16} height={16} />,
  locale: 'es',
  labels: {
    new: 'Nuevo',
  },
};

export const childrens = [
  <LibraryCard
    variant="media"
    menuItems={menuItems}
    dashboard
    asset={{
      name: 'La historia detrás del cuadro',
      color: '#4F96FF',
      description:
        'We’ve always been told that the brain contains billions of neurons, which, of course, have an essential role in all the processes',
      fileType: 'audio',
      cover:
        'https://s3-alpha-sig.figma.com/img/9845/7ff2/9522c3f9e01cf33153ab13d4c28b6e6f?Expires=1653264000&Signature=A8d3OQbnzLExJtCkXvNvqtxe8Tz8Q9Vx0TvA42pUa~ti3PWLxbmeY-luFb21MqAXGwpLs5qaci23Swf-0S5vWnKQdgmrKNtrIi4-3hVCA3SqrTOSPOh91-Tj~elBXYV6ytFIMZMzBeD8eZXdpDODlUabPElxaeSSKHr-WM3No6hSeUKLWDzSpdtzotOL3GxJlShh3k~0Co~JS133HVaWyCo4XkKAIIFcYyZ-iZsAaJcwb-Y3w1zeQEJhWj65biIMYDtzblidTCpzvjLJG9QDgIkLt91KKFXf-TA465C1tzgWQ5zJzCT~fNZlSaoihl1pwL5ohX3fzjz8PdDbogouow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    }}
    action="Ver tarea"
    isNew
    deadlineProps={{ ...deadlineProps, deadline: new Date('2022-05-30') }}
  />,
  <LibraryCard
    variant="media"
    menuItems={menuItems}
    dashboard
    asset={{
      name: 'Organizo mi estudio',
      color: '#B462F2',
      description:
        'We’ve always been told that the brain contains billions of neurons, which, of course, have an essential role in all the processes',
      fileType: 'audio',
      cover:
        'https://s3-alpha-sig.figma.com/img/0e30/224d/b3942880e35918b873114442a704f1ee?Expires=1653264000&Signature=KmMKeiGa1IYlB3EoLCBxVTm5lCXuVCbDqyRDMNM9vbvk4ge94R5UJ22~jeBZpBYfC6XcS~7-nUKCdWb50jC4CCypsqgSvPuw2N1XstxDTEOak9XxPP6VrFdUgJwtDKrKMV8gD6HGMAqnjTo4iJKOEoTNZjCNBb9gsk5whpmKG02ecuxmrG7qgHVHL29-GSes2othN6TsgPyNZkHeJYWIO8aGAjJ-6DK4K4RIsbMuuztyS7IMJth31kLmpVHmrV-wh8a0y6MoUCE~qKfQ9KSq0K3Kd4u7tJx1pVxpnDUecRNjHxeeW1BNG4DFs5XtMSGovr0Op0jz2xSnTR6wY~O-ng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    }}
    deadlineProps={{ ...deadlineProps, deadline: new Date('2022-05-14') }}
  />,
  <LibraryCard
    variant="media"
    menuItems={menuItems}
    dashboard
    badge="Global"
    asset={{
      name: 'Examen: El Siglo XVII en España',
      color: '#5B6577',
      description:
        'We’ve always been told that the brain contains billions of neurons, which, of course, have an essential role in all the processes',
      fileType: 'audio',
      cover:
        'https://s3-alpha-sig.figma.com/img/88b5/5a2c/fe644f7caa4bb6b6cc1bb62f4dde0519?Expires=1653264000&Signature=JocIZGo3ivs~ZTlW85soeuyNYXvi-de2meD8YiZpZF9IIIRnITF44o2QfjQMdBy2FyqsreSeeduqK~NOoGpUc5l1okVZqDqwcGO3mqZ6gdbaYQ6lUnnUhD~JuCPhsVaJzJIiIfRA8MQlwybUe-qAlWOtjSC47BReZH5q3OWYrR6Ye65Ck7Xnzi1XehrAnZbBfEbAcbyqBJw0bhGFEnXHypyzV~iNK~lLxGijiIMmnCTdyoXFV20jyMjyMq25mHLEt8DjyfcY06XLGZeXjoNSYC2Jf8ic4VmbHYO4baxKTAXIg5F8WgrzqCAgM~t-novt3az~7L0w-2XNzq73wZLI2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    }}
    deadlineProps={{ ...deadlineProps, deadline: new Date('2022-05-20') }}
  />,
  <LibraryCard
    variant="media"
    menuItems={menuItems}
    dashboard
    asset={{
      name: 'La historia detrás del cuadro',
      color: '#4F96FF',
      description:
        'We’ve always been told that the brain contains billions of neurons, which, of course, have an essential role in all the processes',
      fileType: 'audio',
      cover:
        'https://s3-alpha-sig.figma.com/img/9845/7ff2/9522c3f9e01cf33153ab13d4c28b6e6f?Expires=1653264000&Signature=A8d3OQbnzLExJtCkXvNvqtxe8Tz8Q9Vx0TvA42pUa~ti3PWLxbmeY-luFb21MqAXGwpLs5qaci23Swf-0S5vWnKQdgmrKNtrIi4-3hVCA3SqrTOSPOh91-Tj~elBXYV6ytFIMZMzBeD8eZXdpDODlUabPElxaeSSKHr-WM3No6hSeUKLWDzSpdtzotOL3GxJlShh3k~0Co~JS133HVaWyCo4XkKAIIFcYyZ-iZsAaJcwb-Y3w1zeQEJhWj65biIMYDtzblidTCpzvjLJG9QDgIkLt91KKFXf-TA465C1tzgWQ5zJzCT~fNZlSaoihl1pwL5ohX3fzjz8PdDbogouow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    }}
    action="Ver tarea"
    isNew
    deadlineProps={{ ...deadlineProps, deadline: new Date('2022-05-30') }}
  />,
  <LibraryCard
    variant="media"
    menuItems={menuItems}
    dashboard
    asset={{
      name: 'Organizo mi estudio',
      color: '#B462F2',
      description:
        'We’ve always been told that the brain contains billions of neurons, which, of course, have an essential role in all the processes',
      fileType: 'audio',
      cover:
        'https://s3-alpha-sig.figma.com/img/0e30/224d/b3942880e35918b873114442a704f1ee?Expires=1653264000&Signature=KmMKeiGa1IYlB3EoLCBxVTm5lCXuVCbDqyRDMNM9vbvk4ge94R5UJ22~jeBZpBYfC6XcS~7-nUKCdWb50jC4CCypsqgSvPuw2N1XstxDTEOak9XxPP6VrFdUgJwtDKrKMV8gD6HGMAqnjTo4iJKOEoTNZjCNBb9gsk5whpmKG02ecuxmrG7qgHVHL29-GSes2othN6TsgPyNZkHeJYWIO8aGAjJ-6DK4K4RIsbMuuztyS7IMJth31kLmpVHmrV-wh8a0y6MoUCE~qKfQ9KSq0K3Kd4u7tJx1pVxpnDUecRNjHxeeW1BNG4DFs5XtMSGovr0Op0jz2xSnTR6wY~O-ng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    }}
    deadlineProps={{ ...deadlineProps, deadline: new Date('2022-05-14') }}
  />,
];
