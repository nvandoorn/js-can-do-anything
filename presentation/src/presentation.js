// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem as SListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  Image,
  Fit,
  Layout,
  Link
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

import jsIntro from './images/intro.gif'
import me from './images/me.jpg'
import moth from './images/moth.jpg'
import ie from './images/ie.png'
import guy from './images/guy.png'

import es5Class from './demos/1-es5-class.example.js'
import es6Class from './demos/2-es6-class.example.js'
import varLetConst from './demos/3-var-let-const.example.js'
import anonCallbacks from './demos/4-anonymous-functions-callbacks.example.js'
import syncAsync from './demos/5-sync-async.example.js'
import callbackHell from './demos/6-callback-hell.example.js'
import promiseExample from './demos/7-promises.example.js'

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
            <Image src={ie} width="100px" alt="The Original Villian" />
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
            var, let, const
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
          <Heading size={1} fit lineHeight={1}>
            3. Interacting With the Page: The DOM API
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1}>
            4. Organizing Your Code
          </Heading>
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
