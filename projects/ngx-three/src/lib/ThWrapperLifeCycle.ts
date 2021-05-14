import { Type } from '@angular/core';

/**
 * This interface represents the lifecycle of a three.js wrapper instance
 * The members are ordered with respect to their appearance in the lifecycle
 *
 * In general the lifecycle consists of 4 steps
 * 1) three.js object creation (Object3d, Material, Geometry ...)
 *   - either by createThreeInstance
 *   - or by setting an external objRef (i.e. Object3d ...)
 * 2) add three.js object to render tree
 *   - can be suppressed by setting "autoAddToParent" to false
 *   - this usually happens when ngOnInit is called or when an external objRef is set
 * -------------------------
 *  ...
 * -------------------------
 * 3) remove three.js object from render tree
 *   - happens in ngOnDestroy
 * 4) dispose object
 *   - can be suppressed by setting "autoDispose" to false
 *   - happens in ngOnDestroy
 *
 *
 * In the most simple form
 * Step 1 and 2 are equal to ngOnInit
 * Step 3 and 4 are equal to ngOnDestroy
 *
 */
export interface ThWrapperLifeCycle {
  // ---------------------------------------------------------------------------------------------------------------
  // 1) object creation
  // ---------------------------------------------------------------------------------------------------------------
  /**
   * reference to the corresponding three.js object (i.e.: Object3d, Material, Geometry ...)
   * set this member if you want to add your custom three.js instance to the wrapper
   */
  objRef: any;

  /**
   * implement this
   * returns the three.js type/class
   */
  getType(): Type<any>;
  /**
   * create the instance of the class return by @getType
   * override this method if you need custom construction code
   *
   * @param args the arguments to pass to the constructor
   */
  createThreeInstance(args?: Iterable<any>): any;

  // ---------------------------------------------------------------------------------------------------------------
  // 2) add three.js object to render tree
  // ---------------------------------------------------------------------------------------------------------------
  /**
   * set to false if you do not want the three.js object to be added to the parent automatically
   * default: true
   */
  autoAddToParent: boolean;

  /**
   * adds the three.js objRef to the three.js parent
   * typically called in ngOnInit or when objRef is set
   */
  addToParent(): void;

  // ---------------------------------------------------------------------------------------------------------------
  // 3) remove three.js object from tree
  // ---------------------------------------------------------------------------------------------------------------
  /**
   * called in ngOnDestroy
   *
   * override if you need custom behaviour
   */
  removeFromParent(): void;

  // ---------------------------------------------------------------------------------------------------------------
  // 4) dispose the object
  // ---------------------------------------------------------------------------------------------------------------

  /**
   * set to false if you do not want that dispose is called on the three corresponding three.js class (if available)
   * ing ngOnDestroy
   *
   * default: true
   */
  autoDispose: boolean;
  /**
   * many three classes have dispose methods
   * by default this method is called in ngOnDestroy
   *
   * override if you need custom despose behaviour.
   */
  disposeObjRef(): void;
}
