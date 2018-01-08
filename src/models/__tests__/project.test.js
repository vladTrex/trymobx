import { searchProjectByTitle } from '../project';

describe('searchProjectByTitle', () => {
    it('should search project by title', () => {

        const projectsMock = [
            {id: '121212', title: 'Greate project1'},
            {id: '232323', title: 'Mega Project'}
        ];

        expect(searchProjectByTitle(projectsMock, 'Mega Project')).toEqual([
            {id: '232323', title: 'Mega Project'}
        ]);
    });
});