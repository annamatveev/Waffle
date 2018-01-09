// import { fromJS } from 'immutable';
import { UPDATE_ITEM_COLOR } from '../Feed/FeedItem/FeedItemActionsTypes';
import { ADD_ITEM } from '../Feed/FeedActionsTypes';

const items = {
  H1xKl15G41: {
    guid: 'H1xKl15G41',
    color: '#e3fbfc',
    title: 'Lessons from 7 self-taught coders who now work full time as software developers',
    body: 'Studying web development is a path with many ups and downs. You might have one day where you figure out a ' +
    'tough problem and feel absolutely amazing. But then the very next day, you get stuck on a seemingly easy problem ' +
    'for hours. You end up feeling completely defeated.',
  },
  H1xKl15G42: {
    guid: 'H1xKl15G42',
    color: '#e3fbfc',
    title: '6 Years Later and I’m Still Just a Wantrepreneur',
    body: 'I am a wantrepreneur. I’ve been breathing and talking entrepreneurship for the last 6 years, but I still ' +
    'don’t have my own startup. I came across the term “startup” for the very first time and have since witnessed the ' +
    'startup ecosystem in Melbourne boom. I’ve also watched many ships sail off to return with people skipping all the ' +
    'way to the bank. Yet, 6 years later, I am still working for someone else.',
  },
  H1xKl15G43: {
    guid: 'H1xKl15G43',
    color: '#e3fbfc',
    title: '2017 In Review: The gods Must Be Crazy',
    body: 'The culture of writing yearly reviews started last year for me (2016 in review).And I’m grateful that I get ' +
    'to write another review this year. First, I’ll like to think that I didn’t do much this year, but every single ' +
    'person that I have shared this train of thought with thinks I’m crazy.',
  },
  H1xKl15G44: {
    guid: 'H1xKl15G44',
    color: '#e3fbfc',
    title: '21 Awesome Places to Learn Critical Skills That Will Change Your Life',
    body: 'But lifelong learning has incredible benefits, both personal and professional, say researchers. ' +
    'It makes communities more productive and innovative, and gives employees the ability to cope with constantly ' +
    'changing workplaces. Lifelong learning helps us stay sharp as we age, and is also important for a successful ' +
    'economy.t',
  },
};

// const initialState = fromJS({ items });
const initialState = items;

export default function ItemsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ITEM_COLOR:
      const modifiedState = Object.assign({}, state);
      modifiedState[action.feedItemGuid].color = '#ffffff';
      return modifiedState;
    case ADD_ITEM:
      return {
        ...state,
        [action.guid]: {
          guid: action.guid,
          color: '#e3fbfc',
          title: 'How to Dramatically Improve your Public Speaking Skills',
          body: 'The ability to communicate a message, sell an idea, or paint a vision is a critical skill for anyone ' +
          'who wants to have an impact on the world. And even in the age of emojis, animated GIFs, and Snapchat filters, ' +
          'public speaking is still the most effective way to move, persuade, and inspire.',
        },
      };
    default:
      return state;
  }
}
