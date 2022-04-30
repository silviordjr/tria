import { useState, useEffect } from 'react'
import { Container, TextCursor } from '../style/HomeStyle';
function TypeWriter({ value }) {
    const [text, setText] = useState('');
  
    const typeWriter = (text, i = 0) => {
      if (i < value.length) {
        setText(text.slice(0, i + 1));
        setTimeout(() => {
          typeWriter(text, i + 1);
        }, 100);
      }
    };
  
    useEffect(() => {
      typeWriter(value);
    }, []);
  
    return (
      <Container>
        {text}
        <TextCursor />
      </Container>
    );
  }

export default TypeWriter