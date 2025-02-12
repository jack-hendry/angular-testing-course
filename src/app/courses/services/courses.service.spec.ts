import { TestBed } from "@angular/core/testing";
import { CoursesService } from "./courses.service";
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { COURSES } from "../../../../server/db-data";
import {  provideHttpClient, withInterceptors} from "@angular/common/http";


describe("CoursesService", () => { 

    let coursesService: CoursesService, httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CoursesService,
                provideHttpClient(withInterceptors([])),
                provideHttpClientTesting(),
            ]
        });
        coursesService = TestBed.inject(CoursesService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    
    it('should retrieve all courses', () => {
        coursesService.findAllCourses().subscribe(courses => {
            expect(courses).toBeTruthy('No courses returned');

            expect(courses.length).toBe(12,'incorrect number of courses');

            const course = courses.find(course => course.id == 12);
            expect(course.titles.description).toBe('Angular Testing Course');
        });
        const req = httpTestingController.expectOne('/api/courses');

        expect(req.request.method).toBe('GET');
        req.flush({payload: Object.values(COURSES)});
        
    });
});