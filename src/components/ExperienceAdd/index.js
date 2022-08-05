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
    <div className="container__page__all">
      <div className="container__page__others">
        <PageHeader />
        <ExperienceForm />
        <Footer />
      </div>
    </div>
  );
}

export default ExperienceAdd;
