// import SyntaxHighlighter from 'react-syntax-highlighter';
import {Light as SyntaxHighlighter} from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
import csharp from 'react-syntax-highlighter/dist/esm/languages/hljs/csharp'
import {  vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { srcery } from 'react-syntax-highlighter/dist/cjs/styles/hljs'


SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('ts', ts);
SyntaxHighlighter.registerLanguage('cs', csharp);



type Foo = {
  node: object,
  inline: boolean,
  className: string,
  children: any,
  props: any
}

const CodeBlock: object = {
  code(foo: Foo) {
    const match = /language-(\w+)/.exec(foo.className || '')
    return !foo.inline && match ? (
      <SyntaxHighlighter
        children={String(foo.children).replace(/\n$/, '')}
        style={vs2015}
        language={match[1]}
        PreTag="div"
        {...(foo.props)}
      />
    ) : (
      <code className={foo.className} {...(foo.props)}>
        {foo.children}
      </code>
    )
  }
}

export default CodeBlock as object;