import { TestBed } from "@angular/core/testing";
import { CoursesService } from "./courses.service";
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";


describe("CoursesService", () => { 

    let coursesService: CoursesService, httpTestingController: HttpTestingController

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [provideHttpClientTesting()],
            providers: [
                CoursesService,
            ]
        });
        coursesService = TestBed.inject(CoursesService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    
    it('should retrieve all courses', () => {

    });
});