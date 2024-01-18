import React from 'react';

export type ContactCardProps = {
  name: string;
  job: string;
  email: string;
};

function ContactCard({ name, job, email }: ContactCardProps) {
  return (
    <li className='contact-card'>
      <h2>{name}</h2>
      <dl>
        <dt>Job</dt>
        <dd>{job}</dd>
        <dt>Email</dt>
        <dd>{email}</dd>
      </dl>
    </li>
  );
}

export default ContactCard;
