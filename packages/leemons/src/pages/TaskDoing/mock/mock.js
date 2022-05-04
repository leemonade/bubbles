import { ChevronRightIcon } from '@bubbles-ui/icons/outline';
import { Box, Text, Button, Title, FileItemDisplay } from '@bubbles-ui/components';

const page3 = (classes, nextStep) => {
  const renderFileItems = () => {
    const items = mock.fileItems.map((fileItem, index) => (
      <Box key={index} className={classes.itemDisplayContainer}>
        <FileItemDisplay {...fileItem} />
      </Box>
    ));
    return items;
  };

  return (
    <>
      <Box className={classes.loremIpsum}>
        <Title order={2}>Lorem ipsum</Title>
        <Text color="primary" role="productive" strong className={classes.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
        <Title order={4}>Lorem</Title>
        <Text color="primary" role="productive" className={classes.mainText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Text>
        <Title order={4}>Lorem</Title>
        <Text color="primary" role="productive" className={classes.mainText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Text>
        <Title order={4}>Lorem ipsum lorem</Title>
        <Text color="primary" role="productive" className={classes.mainText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Text>
        <Box className={classes.continueButton}>
          <Button
            position="left"
            rightIcon={<ChevronRightIcon />}
            style={{ width: 338 }}
            rounded
            compact
            onClick={nextStep}
          >
            Continuar
          </Button>
        </Box>
      </Box>
      <Box className={classes.resources}>
        <Text role="productive" color="soft" transform="uppercase">
          Recursos
        </Text>
        <Box className={classes.fileItemList}>{renderFileItems()}</Box>
      </Box>
    </>
  );
};

const pageWithoutResources = (classes, nextStep) => (
  <Box className={classes.loremIpsum}>
    <Title order={2}>Lorem ipsum</Title>
    <Text color="primary" role="productive" strong className={classes.subtitle}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </Text>
    <Title order={4}>Lorem</Title>
    <Text color="primary" role="productive" className={classes.mainText}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </Text>
    <Title order={4}>Lorem</Title>
    <Text color="primary" role="productive" className={classes.mainText}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </Text>
    <Title order={4}>Lorem ipsum lorem</Title>
    <Text color="primary" role="productive" className={classes.mainText}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </Text>
    <Box className={classes.continueButton}>
      <Button
        position="left"
        rightIcon={<ChevronRightIcon />}
        style={{ width: 338 }}
        rounded
        compact
        onClick={nextStep}
      >
        Continuar
      </Button>
    </Box>
  </Box>
);

export const mock = {
  pages: [
    page3,
    pageWithoutResources,
    pageWithoutResources,
    pageWithoutResources,
    pageWithoutResources,
    pageWithoutResources,
    pageWithoutResources,
    pageWithoutResources,
    pageWithoutResources,
    pageWithoutResources,
    pageWithoutResources,
  ],
  headerBackground: {
    styles: {
      position: 'absolute',
      zIndex: -1,
    },
    image:
      'https://s3-alpha-sig.figma.com/img/9845/7ff2/9522c3f9e01cf33153ab13d4c28b6e6f?Expires=1652659200&Signature=QQnVH1PcB6LK5miPkoeC8bhoA8lngTokFivDa9~FmwvWZIrtF5sS75pMxml4K9r-Hf3A0SYLn5atrI6Mklv3gY-gH6c2fiOtpJm2ZN1umBN2W0CAwQOJAB202ACfKh-stLQs-YKONAHH1TF72jgst~wSIsdfItFvFIVQyogcMSEnj8HY~F-6X0Gmfnn0UHgi1fNpv0J9rtHYa4wsHIw7~mhOQK~biDJ~8cxtAoIoNO3FfF~GM0f7HpUV-6Sfb4fyhpKpU~R0dKE0pmeZoGQ6nwoHWgnSfSr4OtUo1X0k0VZBFQZSkt3scqcFqEa9JBtecx~AOlIiSOzuPkfuix-X~A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    backgroundPosition: 'center',
  },
  taskHeader: {
    title: 'La historia detrás del cuadro',
    subtitle: 'Geografía e historia - 3002',
    icon: 'https://icon-library.com/images/white-globe-icon/white-globe-icon-24.jpg',
    color: '#4F96FF',
    styles: {
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
  },
  taskDeadline: {
    label: 'Entrega',
    deadline: new Date('2022-05-22'),
    styles: {
      position: 'absolute',
      top: 8,
    },
  },
  verticalStepper: {
    data: [
      {
        label: 'Current',
        childSteps: [
          { label: 'Content' },
          { label: 'Objectives' },
          { label: 'Assesment criteria' },
        ],
      },
      {
        label: 'Pretask',
      },
      {
        label: 'Enunciado',
      },
      {
        label: 'Desarrollo',
      },
      {
        label: 'Entregable',
        onClick: () => {},
      },
      {
        label: 'Auto reflexión',
        onClick: () => {},
      },
      {
        label: 'Feedback',
        onClick: () => {},
      },
    ],
    calificationProps: {
      label: 'Aprobado',
      grade: 9,
      minimumGrade: 5,
    },
  },
  fileItems: [
    { filename: 'Cuadro_Embarque_Moriscos.jpg', url: 'https://www.leemons.io/es' },
    { filename: 'Cuadro_Embarque_Moriscos.jpg', url: 'https://www.leemons.io/es' },
    { filename: 'Cuadro_Embarque_Moriscos.jpg', url: 'https://www.leemons.io/es' },
  ],
};
