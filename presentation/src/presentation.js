// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem as SListItem,
  List,
  Slide,
  Text,
  CodePane as SCodePane,
  Image,
  Link
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

import jsIntro from './images/intro.gif'
import me from './images/me.jpg'
import moth from './images/moth.jpg'
import ie from './images/ie.png'
import guy from './images/guy.png'
import htmlTree from './images/html-tree.png'

import es5Class from './demos/1-es5-class.example.js'
import es6Class from './demos/2-es6-class.example.js'
import varLetConst from './demos/3-var-let-const.example.js'
import anonCallbacks from './demos/4-anonymous-functions-callbacks.example.js'
import syncAsync from './demos/5-sync-async.example.js'
import callbackHell from './demos/6-callback-hell.example.js'
import promiseExample from './demos/7-promises.example.js'
import asyncAwait from './demos/8-async-await.example.js'
import domManipulation from './demos/9-dom-manipulation.example.html'
import domTraversal from './demos/10-dom-traversal.example.html'
import pureJs from './demos/11-pure-js-app.example.html'
import manualSplittingA from './demos/12-manual-code-splitting-a.example.js'
import manualSplittingB from './demos/12-manual-code-splitting-b.example.js'
import manualSplitting from './demos/12-manual-code-splitting.example.html'
import esModuleA from './demos/13-es-modules-a.example.js'
import esModuleB from './demos/13-es-modules-b.example.js'
import esModule from './demos/13-es-modules.example.js'

require('prism-themes/themes/prism-atom-dark.css')

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: '#03A9FC',
    secondary: '#FFFFFF',
    panic: '#e54b4b'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

const ListItem = p => <SListItem margin="0 0 20px 0" textSize="1.2em" {...p} />
const CodePane = p => <SCodePane theme="external" {...p} />

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
        progress="none"
        contentHeight={1000}
      >
        <Slide
          bgImage={jsIntro}
          bgSize="contain"
          bgRepeat="no-repeat"
          bgDarken={0.5}
        >
          <Heading size={1} fit lineHeight={1}>
            JavaScript: You Can Do Anything
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1}>Me</Heading>
          <Image src={me} alt="Me" width="300px" />
          <List>
            <ListItem>nick@brnkl.io</ListItem>
            <ListItem>twitter.com/nickvandoorn</ListItem>
            <ListItem>github.com/nvandoorn</ListItem>
          </List>
        </Slide>
        <Slide>
          <Image src={moth} alt="Moths use PHP" />
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1}>
            JavaScript has a killer feature...
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1}>
            You can do anything 🕶
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1}>
            JavaScript also has a killer bug...
          </Heading>
        </Slide>
        <Slide bgColor="panic">
          <Heading size={1} fit lineHeight={1}>
            You can do anything 🍝
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1}>
            What Makes JavaScript so Weird?
          </Heading>
          <List>
            <ListItem>
              Asynchronous: things don't always happen in the order they appear
            </ListItem>
            <ListItem>3+ versions co-existing in the wild</ListItem>
            <ListItem>Strong association with HTML</ListItem>
            <ListItem>No convenient way to split up your code</ListItem>
            <ListItem>Your user might be using Internet Explorer</ListItem>
            <ListItem>
              Feature overlap (JavaScript has 6 ways to write a function)
            </ListItem>
            <ListItem>
              If we change the language, we can't break the SpaceJam website
            </ListItem>
            <ListItem>Tools and ecosystem can be really daunting</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1}>
            What Makes JavaScript so Practical?
          </Heading>
          <List>
            <ListItem margin="20px 0">
              You can run it anywhere and target all platforms simultaneously*
            </ListItem>
            <ListItem>
              Huge amount of open source libraries and frameworks available and
              ready to use*
            </ListItem>
            <ListItem>
              Excellent knowledge base and support from other developers
            </ListItem>
            <ListItem>
              Convenient language features (if you can decide which to use)
            </ListItem>
          </List>
          <Text textAlign="left" textSize="24px">
            * this is a really big deal
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1}>
            1. Runtime Environment and Language Spec
            <Image src={ie} width="100px" alt="The Original Villain" />
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} lineHeight={2}>
            ES (ECMAScript) 5
          </Heading>
          <CodePane lang="javascript" source={es5Class} />
          <Heading size={6} lineHeight={2}>
            ES2015 (6)
          </Heading>
          <CodePane lang="javascript" source={es6Class} />
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1}>
            Variable Scoping
          </Heading>
          <CodePane lang="javascript" source={varLetConst} />
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1}>
            In Summary...
          </Heading>
          <List>
            <ListItem>ES2015 is a game changer</ListItem>
            <ListItem>
              Favour documentation and reference material that is new and uses
              ES2015
            </ListItem>
            <ListItem>
              Be mindful of where your code is running (it might be Internet
              Explorer 10)
            </ListItem>
            <ListItem>Be mindful of feature compatibility</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1}>
            2. Async and Event Handling
          </Heading>
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1}>
            Anonymous Functions and Callbacks
          </Heading>
          <CodePane lang="javascript" source={anonCallbacks} />
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1}>
            Synchronous vs Asynchronous
          </Heading>
          <CodePane lang="javascript" source={syncAsync} />
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1}>
            Are Callbacks Sufficient?
          </Heading>
          <CodePane lang="javascript" source={callbackHell} />
        </Slide>
        <Slide bgColor="panic">
          <Heading size={1} lineHeight={1}>
            Not really 🍝
          </Heading>
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1}>
            Promises Can Help
          </Heading>
          <CodePane lang="javascript" source={promiseExample} />
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1}>
            Async Await
          </Heading>
          <CodePane lang="javascript" source={asyncAwait} />
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1}>
            In Summary...
          </Heading>
          <List>
            <ListItem>
              Async code will always be a little painful: you're doing something
              really complex
            </ListItem>
            <ListItem>
              Anonymous functions are great for when you need to pass a
              callback, but will never use it again
            </ListItem>
            <ListItem>
              Promises can make async code dramatically easier to understand,
              but callbacks aren't going away, so get comfortable with both
            </ListItem>
            <ListItem>
              async/await is a sweet taste of the future, but do your homework
              before using it
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1}>
            3. Interacting With the Page: The DOM API
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1}>
            Document Object Model (DOM)
          </Heading>
          <Image height="400px" src={htmlTree} alt="HTML tree model" />
          <List>
            <ListItem>
              In essence, HTML is a tree of text and user interface components
            </ListItem>
            <ListItem>
              The functions provided by the DOM let you analyze and modify this
              tree
            </ListItem>
            <ListItem>The DOM API has evolved a lot recently</ListItem>
            <ListItem>
              This means frameworks focused around the DOM (jQuery) are no
              longer a requirement
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1}>
            Building a Clock
          </Heading>
          <CodePane lang="html" source={domManipulation} />
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1}>
            Iterating Over Nodes
          </Heading>
          <CodePane lang="html" source={domTraversal} />
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1}>
            Pure JS App
          </Heading>
          <CodePane lang="html" source={pureJs} />
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1}>
            Is the DOM API alone sufficient for production apps?
          </Heading>
        </Slide>
        <Slide bgColor="panic">
          <Heading size={1} fit lineHeight={1}>
            Depends on your patience and time budget ⏳
          </Heading>
        </Slide>
        <Slide bgColor="panic">
          <Heading size={6} lineHeight={1}>
            Frameworks like React, Angular, and Vue exist to solve this issue,
            but they introduce their own tradeoffs, so don't expect a magic
            bullet
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1}>
            In Summary...
          </Heading>
          <List>
            <ListItem>
              The DOM does an excellent job of adding small interactions to
              otherwise static pages
            </ListItem>
            <ListItem>
              The DOM offers useful functions to query and traverse your HTML
              tree
            </ListItem>
            <ListItem>
              With some fancy footwork, you can build your entire app with just
              the DOM API
            </ListItem>
            <ListItem>
              ...but it gets painful pretty fast, so investing time into
              learning a framework may pay off quickly
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1}>
            4. Organizing Your Code
          </Heading>
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1}>
            Manual Code Splitting
          </Heading>
          <CodePane lang="javascript" source={manualSplittingA} />
          <CodePane lang="javascript" source={manualSplittingB} />
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1}>
            ...Putting it All Together
          </Heading>
          <CodePane lang="html" source={manualSplitting} />
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1}>
            ES Modules
          </Heading>
          <CodePane lang="javascript" source={esModuleA} />
          <CodePane lang="javascript" source={esModuleB} />
          <CodePane lang="javascript" source={esModule} />
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1}>
            In Summary...
          </Heading>
          <List>
            <ListItem>
              There are lots of valid ways to split up your code
            </ListItem>
            <ListItem>
              ES modules are the ideal (and soon to be native) way to do it
            </ListItem>
            <ListItem>ES module browser compatibility is OK at best</ListItem>
            <ListItem>
              In the meantime, using any mechanism of scope control (such as the
              "revealing modules" pattern) will help you write fewer bugs
            </ListItem>
            <ListItem>
              If you're brave, you can start using ES modules today with some
              extra tools
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1}>
            5. Tools To Make All This "Easier™"
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1}>
            Transpilers (Compilers)
          </Heading>
          <List>
            <ListItem>
              Transform newer versions of JavaScript into older versions
              (usually ES2015 -> ES5)
            </ListItem>
            <ListItem>
              Generally used to support new JavaScript features on older
              browsers
            </ListItem>
            <ListItem>
              Running a compiler on your code catches many errors that would
              otherwise happen at runtime
            </ListItem>
            <ListItem>Babel is by far the most popular JS transpiler</ListItem>
          </List>
          <Image src={guy} alt="Babel likes Guy Fieri" height="300px" />
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1}>
            Bundlers
          </Heading>
          <List>
            <ListItem>
              On larger projects, putting all the source files together into one
              app is challenging (which files load first, which files depend on
              each other?)
            </ListItem>
            <ListItem>
              ES modules offer an elegant solution for this, but they are not
              well supported
            </ListItem>
            <ListItem>
              Bundlers fill in this gap by supporting ES modules today
            </ListItem>
            <ListItem>
              webpack and Parcel are the most popular bundlers
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1}>
            Linters and Formatters
          </Heading>
          <List>
            <ListItem>
              Linters help you catch bugs ahead of time (e.g all errors must be
              handled) and can also enforce specific rules (e.g no console.log
              in production)
            </ListItem>
            <ListItem>
              ESLint is the most popular JavaScript linter (other linters like
              JSCS have been merged into ESLint)
            </ListItem>
            <ListItem>
              Formatters mean you never have to worry about indentation again
            </ListItem>
            <ListItem>
              Prettier and clang-format are both great if you have time to set
              them up to your liking
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1}>
            Projects
          </Heading>
          <Link href="https://github.com/nvandoorn/js-can-do-anything/projects">
            Get the code here
          </Link>
        </Slide>
      </Deck>
    )
  }
}
