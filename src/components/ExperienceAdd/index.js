// == Imports

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PageHeader from '../Header/PageHeader';
import Footer from '../Footer';
import ExperienceForm from './Form';
import { fetchReceptionStructure, fetchVolunteeringType } from '../../actions/categories';

function ExperienceAdd() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReceptionStructure()),
    dispatch(fetchVolunteeringType());
  }, []);
  return (
    <>
      <PageHeader />
      <ExperienceForm />
      <Footer />
    </>
  );
}

export default ExperienceAdd;
