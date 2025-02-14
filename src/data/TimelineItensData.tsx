import { Cpu, User, Article, Globe } from '@phosphor-icons/react';
import { ReactNode } from 'react';

interface TimelineItemProps {
  title: string;
  date: string;
  text: ReactNode;
  color: 'primary' | 'secondary';
  icon: ReactNode;
}

export const TimelineItems: TimelineItemProps[] = [
  {
    title: "PERSONAL INTERVIEW",
    date: "05/09 - 13/09",
    text: <p>
      Interview with members of the MAIA team, carried out to understand the candidate's profile
    </p>,
    color: 'primary',
    icon: <User weight='fill' />,
  },
  {
    title: "ARTICLE - OPTIONAL",
    date: "10/09",
    text: <p>
      Write an article about artificial intelligence, and send it to the email: {' '}
      <a href="mailto:maia@facens.br" target='_blank'>maia@facens.br</a>
      <br />
      These <a href="#ai-links">links</a> may be useful for the writing process.
    </p>,
    icon: <Article weight='fill' />,
    color: 'secondary',
  },
  {
    title: "WEB SITE - OPTIONAL",
    date: "10/09",
    text: <p>
      Show off your programming skills by contributing to {' '}
      <a key="maia-site" href="https://maiafacens.github.io/PS-links/" target='_blank'>our website</a>
      <br />
      Feel free to make any necessary changes and then submit a pull request to us on the {' '}
      <a href="https://github.com/maiafacens/PS-links" target='_blank'>GitHub repository</a>
    </p>,
    icon: <Globe />,
    color: 'secondary',
  },
  {
    title: "TECHNICAL TEST",
    date: "18/09 - 22/09",
    text: <p>
      A test to understand the candidate's level of Technical knowledge.
    </p>,
    icon: <Cpu weight='fill'/>,
    color: 'primary',
  },
]