package com.a504.chatcomposer.music.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Schema(description = "트랙 정보 DTO + 트랙 pk")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonNaming(value = PropertyNamingStrategies.SnakeCaseStrategy.class)
public class Track extends TrackDetails {

	@Schema(description = "트랙 pk")
	private Long trackId;

	@Builder
	public Track(String midiDescription, String musicalInstrument, Long trackId) {
		super(midiDescription, musicalInstrument);
		this.trackId = trackId;
	}
}
