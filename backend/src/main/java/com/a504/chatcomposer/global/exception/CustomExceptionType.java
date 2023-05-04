package com.a504.chatcomposer.global.exception;

import org.springframework.http.HttpStatus;

import lombok.Getter;

@Getter
public enum CustomExceptionType {

	RUNTIME_EXCEPTION(HttpStatus.BAD_REQUEST, "잘못된 요청입니다."),
	INTERNAL_SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "서버 오류 입니다."),

	// USER
	MEMBER_NOT_FOUND(HttpStatus.NOT_FOUND, "사용자 정보가 존재하지 않습니다"),

	// MUSIC
	MUSIC_NOT_FOUND(HttpStatus.NOT_FOUND, "음악 정보가 존재하지 않습니다");

	private final HttpStatus httpStatus;
	private final int code;
	private final String message;

	CustomExceptionType(HttpStatus httpStatus, String message) {
		this.httpStatus = httpStatus;
		this.code = httpStatus.value();
		this.message = message;
	}
}
