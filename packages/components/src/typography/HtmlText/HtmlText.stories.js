import React from 'react';
import { Box } from '@mantine/core';
import { HtmlText } from './HtmlText';
import { HTML_TEXT_DEFAULT_PROPS } from './HtmlText.constants';
import mdx from './HtmlText.mdx';

export default {
  title: 'Atoms/Typography/HtmlText',
  parameters: {
    component: HtmlText,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => <HtmlText {...props} />;

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...HTML_TEXT_DEFAULT_PROPS,
  children: `<p style="margin-left: 0px!important;">Post muy largo</p><p style="margin-left: 0px!important;"></p><p style="margin-left: 0px!important;"></p><p style="margin-left: 0px!important;">El aprendizaje continuo en el mundo de la programación es una necesidad ineludible. La tecnología avanza a pasos agigantados, y lo que hoy es innovador, mañana puede quedar obsoleto. Como desarrolladores, nos enfrentamos al desafío constante de mantenernos actualizados en un campo que evoluciona rápidamente.</p><p style="margin-left: 0px!important;"><span>Uno</span> de los aspectos más fascinantes de este viaje es la diversidad de caminos que podemos tomar. Desde el desarrollo web hasta la inteligencia artificial, pasando por la ciberseguridad y el blockchain, las opciones son casi infinitas. Cada especialización ofrece sus propios retos y recompensas, permitiéndonos encontrar nuestra pasión dentro de este vasto universo digital<span>.</span></p><p style="margin-left: 0px!important;"><span>Sin</span> embargo, el verdadero poder de un programador no reside solo en el conocimiento técnico, sino en la capacidad de resolver problemas. La lógica, la creatividad y el pensamiento crítico son habilidades tan importantes como el dominio de cualquier lenguaje de programación. Es la combinación de estas habilidades lo que nos permite crear soluciones innovadoras y ef<span>icientes.</span></p><p style="margin-left: 0px!important;">Compartir conocimientos, colaborar en proyectos y aprender de los errores y éxitos de otros nos ayuda a crecer más rápido y de manera más integral<span>.</span></p><p style="margin-left: 0px!important;"><span>No</span> debemos olvidar la importancia de la ética en nuestro trabajo. A medida que la tecnología se integra más en todos los aspectos de la vida, nuestra responsabilidad como creadores aumenta. Debemos considerar cuidadosamente el impacto de nuestro código en la sociedad y esforzarnos por desarrollar tecnologías que beneficien a la human<span>idad.</span></p><p style="margin-left: 0px!important;"><span>En res</span>umen, ser programador es embarcarse en un viaje de aprendizaje permanente, lleno de desafíos y oportunidades. Es un camino que requiere dedicación, pasión y una mente abierta. Pero para aquellos que abrazan este estilo de vida, las recompensas son inmensas: la satisfacción de crear, la emoción de innovar y la oportunidad de dejar una huella duradera en el mundo digital<span>.</span></p>`,
};
