import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'chai/register-should';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinonChai from 'sinon-chai';

Enzyme.configure({ adapter: new Adapter() });

const { shallow } = Enzyme;

chai.use(chaiAsPromised);
chai.use(sinonChai);
const { expect } = chai;
const should = chai.should();

export { expect, shallow, should };
