const truncateHtml = (element, maxLines) => {
  const allElements = element.getElementsByTagName('*');
  let lineCount = 0;
  let lastElement;

  for (let i = 0; i < allElements.length; i++) {
    const currentElement = allElements[i];
    const lines = Math.ceil(
      currentElement.offsetHeight / parseInt(getComputedStyle(currentElement).lineHeight),
    );

    if (lineCount + lines > maxLines) {
      const remainingLines = maxLines - lineCount;
      currentElement.style.overflow = 'hidden';
      currentElement.style.textOverflow = 'ellipsis';
      currentElement.style.display = '-webkit-box';
      currentElement.style.WebkitLineClamp = remainingLines.toString();
      currentElement.style.WebkitBoxOrient = 'vertical';
      currentElement.style.wordBreak = 'keep-all';
      currentElement.style.overflowWrap = 'break-word';

      for (let j = i + 1; j < allElements.length; j++) {
        allElements[j].style.display = 'none';
      }
      break;
    }

    lineCount += lines;
    lastElement = currentElement;
  }

  // Si no se excedió el límite, asegurarse de que el último elemento esté visible
  if (lastElement) {
    lastElement.style.display = '';
  }
};

export { truncateHtml };
